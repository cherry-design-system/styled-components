import { icons } from "lucide-react";

export type IconProps = keyof typeof icons;

interface Props {
  name: IconProps;
  color?: string;
  size?: number;
  className?: string;
  "aria-label"?: string;
}

const Icon = ({
  name,
  color,
  size,
  className,
  "aria-label": ariaLabel,
}: Props) => {
  const LucideIcon = icons[name];
  if (!LucideIcon) return null;

  return (
    <LucideIcon
      color={color}
      size={size}
      className={className}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
      role={ariaLabel ? "img" : undefined}
    />
  );
};

export { Icon };
