export interface ButtonProps {
    label: string,
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'error' | 'outlined' | 'outlined-secondary' | 'outlined-error' | 'outlined-neutral';
    disabled?: boolean;
    size?: 'sm' | 'md' | 'lg';
};