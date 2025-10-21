export interface TextInputProps {
    placeholder: string;
    size?: 'sm' | 'md' | 'lg' | 'xg';
    variant?: 'default' | 'underline';
    value?: string;
    readonly?: boolean;
    type?: 'text' | 'password';
    onChange?: (value: string) => void;
};