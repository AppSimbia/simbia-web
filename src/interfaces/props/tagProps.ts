export interface TagProps {
    label: string;
    variant?: 'primary' | 'secondary' | 'error' | 'outlined' | 'outlined-secondary' | 'outlined-error';
    onClick?: (e?: any) => void | any;
    disabled?: boolean;
};