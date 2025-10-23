export interface ButtonProps {
    label: string,
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'error' | 'outlined' | 'outlined-secondary' | 'outlined-error' | 'outlined-neutral';
    disabled?: boolean;
    size?: 'ssm' | 'sm' | 'md' | 'lg' | 'xg';
    type?: 'button' | 'submit' | 'reset';
};