import { icons } from 'lucide-react';
export type IconProps = keyof typeof icons;
interface Props {
    name: IconProps;
    color?: string;
    size?: number;
    className?: string;
}
declare const Icon: ({ name, color, size, className }: Props) => import("react").JSX.Element | null;
export { Icon };
