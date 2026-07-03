"use client";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import styled, { css } from "styled-components";
import { rgba } from "polished";

import { Icon } from "./icon";
import { Theme, mq, resetButton } from "./utils";

export type DropzoneRejectionReason = "type" | "size" | "count";

export interface DropzoneRejection {
  file: File;
  reason: DropzoneRejectionReason;
}

export interface DropzoneProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type" | "value" | "onChange" | "children"
> {
  /** Bold primary prompt line. */
  $prompt?: string;
  /** Optional "or click to browse" sub-line beneath the prompt. */
  $browse?: string;
  /** Optional smaller hint line (accepted types / limits). */
  $hint?: string;
  /** Lucide icon shown in the rounded-square tile. */
  $icon?: React.ComponentProps<typeof Icon>["name"];
  /** Compact, flush variant: horizontal layout, tighter padding, and a
      transparent background so it sits on whatever surface it's embedded in
      (a form row, modal, or list) next to regular inputs. */
  $inline?: boolean;
  /** Maximum number of files kept at once. */
  $maxFiles?: number;
  /** Maximum size per file in bytes. */
  $maxBytes?: number;
  /** Called with the full current file list whenever it changes. */
  onFilesChange?: (files: File[]) => void;
  /** Called with the files that were rejected (wrong type, too big, over the
      count limit) so the caller can surface an error however it likes. */
  onFilesRejected?: (rejections: DropzoneRejection[]) => void;
}

interface DropzoneItem {
  key: string;
  file: File;
  /** Object URL for an instant local preview of image files (revoked on
      cleanup); null for non-image files, which render as an icon tile. */
  previewUrl: string | null;
}

/** Matches a file against an `accept` string (".pdf,image/*,text/plain"),
    mirroring the native file-picker filter for dropped files. */
export const matchesAccept = (file: File, accept?: string) => {
  if (!accept) return true;
  return accept.split(",").some((raw) => {
    const entry = raw.trim().toLowerCase();
    if (!entry) return false;
    if (entry.startsWith(".")) {
      return file.name.toLowerCase().endsWith(entry);
    }
    if (entry.endsWith("/*")) {
      return file.type.toLowerCase().startsWith(entry.slice(0, -1));
    }
    return file.type.toLowerCase() === entry;
  });
};

function LocalDropzone(
  {
    $prompt = "Drag & drop files here",
    $browse,
    $hint,
    $icon = "FileUp",
    $inline,
    $maxFiles,
    $maxBytes,
    onFilesChange,
    onFilesRejected,
    accept,
    multiple,
    disabled,
    ...rest
  }: DropzoneProps,
  ref: React.Ref<HTMLInputElement>,
) {
  const [items, setItems] = useState<DropzoneItem[]>([]);
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => inputRef.current!);

  // Latest items, read by the unmount cleanup without re-subscribing.
  const itemsRef = useRef<DropzoneItem[]>([]);
  itemsRef.current = items;

  // Revoke all outstanding preview URLs on unmount.
  useEffect(() => {
    return () => {
      itemsRef.current.forEach(
        (item) => item.previewUrl && URL.revokeObjectURL(item.previewUrl),
      );
    };
  }, []);

  const limit = multiple ? ($maxFiles ?? Infinity) : 1;
  const atLimit = items.length >= limit;

  const addFiles = (fileList: FileList | null) => {
    if (!fileList || disabled) return;
    const files = Array.from(fileList);
    const rejections: DropzoneRejection[] = [];
    const accepted: DropzoneItem[] = [];

    // A single-file dropzone replaces its file instead of hitting the limit.
    const replacing = !multiple && files.length > 0;
    const remaining = replacing ? 1 : limit - items.length;

    for (const file of files) {
      if (accepted.length >= remaining) {
        rejections.push({ file, reason: "count" });
        continue;
      }
      if (!matchesAccept(file, accept)) {
        rejections.push({ file, reason: "type" });
        continue;
      }
      if ($maxBytes && file.size > $maxBytes) {
        rejections.push({ file, reason: "size" });
        continue;
      }
      accepted.push({
        key: `${file.name}-${file.size}-${Date.now()}-${accepted.length}`,
        file,
        previewUrl: file.type.startsWith("image/")
          ? URL.createObjectURL(file)
          : null,
      });
    }

    if (rejections.length > 0) onFilesRejected?.(rejections);
    if (accepted.length === 0) return;

    setItems((current) => {
      const kept = replacing ? [] : current;
      if (replacing) {
        current.forEach(
          (item) => item.previewUrl && URL.revokeObjectURL(item.previewUrl),
        );
      }
      const next = [...kept, ...accepted];
      onFilesChange?.(next.map((item) => item.file));
      return next;
    });
  };

  const removeItem = (key: string) => {
    setItems((current) => {
      const item = current.find((it) => it.key === key);
      if (item?.previewUrl) URL.revokeObjectURL(item.previewUrl);
      const next = current.filter((it) => it.key !== key);
      onFilesChange?.(next.map((it) => it.file));
      return next;
    });
  };

  const openPicker = () => {
    if (disabled || atLimit) return;
    inputRef.current?.click();
  };

  return (
    <StyledDropzoneWrapper>
      <StyledDropzone
        type="button"
        aria-label={$prompt}
        $dragOver={dragOver}
        $inline={$inline}
        disabled={disabled || atLimit}
        onClick={openPicker}
        onDragOver={(e) => {
          e.preventDefault();
          if (!disabled && !atLimit) setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragOver(false);
          addFiles(e.dataTransfer.files);
        }}
      >
        <StyledDropIcon $inline={$inline}>
          <Icon name={$icon} />
        </StyledDropIcon>
        <StyledDropPrompt $inline={$inline}>
          {$prompt}
          {$browse ? <span>{$browse}</span> : null}
        </StyledDropPrompt>
        {$hint ? (
          <StyledDropHint $inline={$inline}>{$hint}</StyledDropHint>
        ) : null}
      </StyledDropzone>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        disabled={disabled}
        hidden
        onChange={(e) => {
          addFiles(e.target.files);
          // Reset so re-selecting the same file fires change again.
          e.target.value = "";
        }}
        {...rest}
      />

      {items.length > 0 && (
        <StyledThumbs>
          {items.map((item) => (
            <StyledThumb key={item.key} title={item.file.name}>
              {item.previewUrl ? (
                <img src={item.previewUrl} alt={item.file.name} />
              ) : (
                <StyledThumbFile>
                  <Icon name="File" />
                  <span>{item.file.name}</span>
                </StyledThumbFile>
              )}
              <StyledThumbRemove
                type="button"
                aria-label={`Remove ${item.file.name}`}
                onClick={() => removeItem(item.key)}
                disabled={disabled}
              >
                <Icon name="X" />
              </StyledThumbRemove>
            </StyledThumb>
          ))}
        </StyledThumbs>
      )}
    </StyledDropzoneWrapper>
  );
}

const Dropzone = forwardRef(LocalDropzone);

export { Dropzone };

const StyledDropzoneWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

/* Dashed drop target. Light fill, grayLight border, radius.lg, grayDark helper
   text, and a primary accent on hover / drag-over. The inline variant keeps the
   dashed border (the drop affordance) but goes horizontal and compact, with a
   transparent background so it sits flush on the surface it's embedded in. */
const StyledDropzone = styled.button<{
  theme: Theme;
  $dragOver?: boolean;
  $inline?: boolean;
}>`
  ${resetButton};
  display: flex;
  flex-direction: ${({ $inline }) => ($inline ? "row" : "column")};
  align-items: center;
  justify-content: center;
  gap: ${({ $inline }) => ($inline ? "10px" : "8px")};
  width: 100%;
  padding: ${({ $inline }) => ($inline ? "10px 14px" : "24px 20px")};
  border-radius: ${({ theme }) => theme.spacing.radius.lg};
  border: 2px dashed ${({ theme }) => theme.colors.grayLight};
  background: ${({ theme, $inline }) =>
    $inline ? "transparent" : theme.colors.light};
  color: ${({ theme }) => theme.colors.grayDark};
  text-align: ${({ $inline }) => ($inline ? "left" : "center")};
  transition: all 0.3s ease;

  ${({ theme, $dragOver }) =>
    $dragOver &&
    css`
      border-color: ${theme.colors.primary};
      background: ${rgba(theme.colors.primary, theme.isDark ? 0.12 : 0.05)};
    `}

  &:hover:not(:disabled) {
    border-color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) =>
      rgba(theme.colors.primary, theme.isDark ? 0.1 : 0.04)};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.primaryLight};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

/* Rounded-square glyph tile. Shrinks to a compact square in the inline variant. */
const StyledDropIcon = styled.span<{ theme: Theme; $inline?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${({ $inline }) => ($inline ? "32px" : "44px")};
  height: ${({ $inline }) => ($inline ? "32px" : "44px")};
  border-radius: ${({ theme }) => theme.spacing.radius.lg};
  background: ${({ theme }) => theme.colors.grayLight};
  border: solid 1px ${({ theme }) => theme.colors.grayLight};
  color: ${({ theme }) => theme.colors.primary};
  transition: all 0.3s ease;

  & svg {
    width: ${({ $inline }) => ($inline ? "18px" : "22px")};
    height: ${({ $inline }) => ($inline ? "18px" : "22px")};
  }
`;

/* Primary prompt line with the "or click to browse" sub-line beneath it. In the
   inline variant the two lines sit on a single row to keep it short. */
const StyledDropPrompt = styled.span<{ theme: Theme; $inline?: boolean }>`
  display: flex;
  flex-direction: ${({ $inline }) => ($inline ? "row" : "column")};
  flex-wrap: wrap;
  align-items: baseline;
  gap: ${({ $inline }) => ($inline ? "0 6px" : "2px")};
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: ${({ theme }) => theme.fontSizes.text.xs};
  line-height: ${({ theme }) => theme.lineHeights.text.xs};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.dark};

  & span {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.grayDark};
  }
`;

const StyledDropHint = styled.span<{ theme: Theme; $inline?: boolean }>`
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: ${({ theme }) => theme.fontSizes.small.xs};
  line-height: ${({ theme }) => theme.lineHeights.small.xs};
  color: ${({ theme }) => theme.colors.gray};

  ${({ $inline }) =>
    $inline &&
    css`
      margin-left: auto;
    `}
`;

/* Thumbnail strip below the dropzone. */
const StyledThumbs = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 72px);
  gap: 10px;

  ${mq("sm")} {
    grid-template-columns: repeat(auto-fill, 84px);
  }
`;

const StyledThumb = styled.div<{ theme: Theme }>`
  position: relative;
  width: 72px;
  height: 72px;
  border-radius: ${({ theme }) => theme.spacing.radius.lg};
  overflow: hidden;
  border: solid 1px ${({ theme }) => theme.colors.grayLight};
  background: ${({ theme }) => theme.colors.light};

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  ${mq("sm")} {
    width: 84px;
    height: 84px;
  }
`;

/* Icon + truncated name tile for non-image files. */
const StyledThumbFile = styled.span<{ theme: Theme }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 100%;
  height: 100%;
  padding: 6px;
  color: ${({ theme }) => theme.colors.grayDark};

  & svg {
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.colors.primary};
  }

  & span {
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 10px;
    line-height: 1.2;
  }
`;

/* Circular remove button pinned to the thumbnail's corner. */
const StyledThumbRemove = styled.button<{ theme: Theme }>`
  ${resetButton};
  position: absolute;
  top: 4px;
  right: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  color: #ffffff;
  background: ${({ theme }) => rgba(theme.colors.dark, 0.6)};
  transition: background 0.3s ease;

  & svg {
    width: 14px;
    height: 14px;
  }

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.error};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
