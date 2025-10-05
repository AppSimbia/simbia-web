export interface ButtonProps {
    label: string,
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'error' | 'outlined' | 'outlined-secondary' | 'outlined-error';
    disabled?: boolean;
    size?: 'md';
};