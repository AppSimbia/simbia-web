export interface TagProps {
    label: string;
    variant?: 'primary' | 'secondary' | 'error' | 'outlined' | 'outlined-secondary' | 'outlined-error';
    onClick?: () => void;
    disabled?: boolean;
};