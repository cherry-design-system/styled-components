"use client";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import styled, { css } from "styled-components";

import { DropzoneRejection, matchesAccept } from "./dropzone";
import { Icon } from "./icon";
import { Theme, alpha, resetButton } from "./utils";

export interface AvatarDropzoneProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type" | "value" | "onChange" | "children" | "multiple"
> {
  /** Visual scale, following the IconButton size scale. */
  $size?: "default" | "big" | "small";
  /** Lucide icon shown while no picture is selected. */
  $icon?: React.ComponentProps<typeof Icon>["name"];
  /** Maximum file size in bytes. */
  $maxBytes?: number;
  /** Accessible label for the drop target. */
  "aria-label"?: string;
  /** Called with the selected picture, or null when it is removed. */
  onFileChange?: (file: File | null) => void;
  /** Called when a file is rejected (wrong type or too big). */
  onFileRejected?: (rejection: DropzoneRejection) => void;
}

const avatarSizes = {
  small: { box: 64, icon: 20 },
  default: { box: 96, icon: 24 },
  big: { box: 128, icon: 28 },
};

function LocalAvatarDropzone(
  {
    $size,
    $icon = "User",
    $maxBytes,
    "aria-label": ariaLabel = "Upload profile picture",
    onFileChange,
    onFileRejected,
    accept = "image/*",
    disabled,
    ...rest
  }: AvatarDropzoneProps,
  ref: React.Ref<HTMLInputElement>,
) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => inputRef.current!);

  // Latest preview URL, read by the unmount cleanup without re-subscribing.
  const previewUrlRef = useRef<string | null>(null);
  previewUrlRef.current = previewUrl;

  useEffect(() => {
    return () => {
      if (previewUrlRef.current) URL.revokeObjectURL(previewUrlRef.current);
    };
  }, []);

  const setFile = (fileList: FileList | null) => {
    if (!fileList || fileList.length === 0 || disabled) return;
    const file = fileList[0];
    if (!matchesAccept(file, accept)) {
      onFileRejected?.({ file, reason: "type" });
      return;
    }
    if ($maxBytes && file.size > $maxBytes) {
      onFileRejected?.({ file, reason: "size" });
      return;
    }
    setPreviewUrl((current) => {
      if (current) URL.revokeObjectURL(current);
      return URL.createObjectURL(file);
    });
    onFileChange?.(file);
  };

  const removeFile = () => {
    setPreviewUrl((current) => {
      if (current) URL.revokeObjectURL(current);
      return null;
    });
    onFileChange?.(null);
  };

  return (
    <StyledAvatarDropzoneWrapper $size={$size}>
      <StyledAvatarDropzone
        type="button"
        aria-label={ariaLabel}
        $size={$size}
        $dragOver={dragOver}
        $hasImage={!!previewUrl}
        disabled={disabled}
        onClick={() => !disabled && inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          if (!disabled) setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragOver(false);
          setFile(e.dataTransfer.files);
        }}
      >
        {previewUrl ? <img src={previewUrl} alt="" /> : <Icon name={$icon} />}
      </StyledAvatarDropzone>
      {previewUrl && (
        <StyledAvatarRemove
          type="button"
          aria-label="Remove profile picture"
          onClick={removeFile}
          disabled={disabled}
        >
          <Icon name="X" />
        </StyledAvatarRemove>
      )}
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        disabled={disabled}
        hidden
        onChange={(e) => {
          setFile(e.target.files);
          // Reset so re-selecting the same file fires change again.
          e.target.value = "";
        }}
        {...rest}
      />
    </StyledAvatarDropzoneWrapper>
  );
}

const AvatarDropzone = forwardRef(LocalAvatarDropzone);

export { AvatarDropzone };

/* Relative shell that also anchors the corner remove button outside the
   circle's clipped edge. */
const StyledAvatarDropzoneWrapper = styled.span<
  Pick<AvatarDropzoneProps, "$size">
>`
  position: relative;
  display: inline-flex;
  width: ${({ $size }) => avatarSizes[$size ?? "default"].box}px;
  height: ${({ $size }) => avatarSizes[$size ?? "default"].box}px;
`;

/* Circular drop target: dashed while empty, solid once a picture is set. The
   selected image fills the circle. */
const StyledAvatarDropzone = styled.button<{
  theme: Theme;
  $size?: AvatarDropzoneProps["$size"];
  $dragOver?: boolean;
  $hasImage?: boolean;
}>`
  ${resetButton};
  font-family: inherit;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  border: 2px ${({ $hasImage }) => ($hasImage ? "solid" : "dashed")}
    ${({ theme }) => theme.colors.grayLight};
  background: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.grayDark};
  transition: all 0.3s ease;

  & svg {
    width: ${({ $size }) => avatarSizes[$size ?? "default"].icon}px;
    height: ${({ $size }) => avatarSizes[$size ?? "default"].icon}px;
    color: ${({ theme }) => theme.colors.primary};
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  ${({ theme, $dragOver }) =>
    $dragOver &&
    css`
      border-color: ${theme.colors.primary};
      background: ${alpha(theme.colors.primary, theme.isDark ? 12 : 5)};

      /* Mode resolved from a \`dark\` class on <html> rather than the theme
         object (no-flash static rendering): same tint, applied pre-hydration. */
      :root.dark & {
        background: ${alpha(theme.colors.primary, 12)};
      }
    `}

  &:hover:not(:disabled) {
    border-color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) =>
      alpha(theme.colors.primary, theme.isDark ? 10 : 4)};
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

/* Circular remove button pinned to the circle's top-right, outside the
   image clip. */
const StyledAvatarRemove = styled.button<{ theme: Theme }>`
  ${resetButton};
  position: absolute;
  top: 0;
  right: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  color: #ffffff;
  background: ${({ theme }) => alpha(theme.colors.dark, 60)};
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
