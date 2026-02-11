import { icons } from "lucide-react";

export type IconProps = keyof typeof icons;

interface Props {
  name: IconProps;
  color?: string;
  size?: number;
  className?: string;
}

const Icon = ({ name, color, size, className }: Props) => {
  const LucideIcon = icons[name];
  if (!LucideIcon) return null;

  return <LucideIcon color={color} size={size} className={className} />;
};

export { Icon };
