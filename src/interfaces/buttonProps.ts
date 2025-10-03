export interface ButtonProps {
    label: string,
    onClick?: () => void;
    variant?: '' | 'secondary' | 'error';
    disabled?: boolean;
    size?: '' | 'md';
};