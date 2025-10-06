export interface TextInputProps {
    placeholder: string;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'underline';
    value?: string;
    onChange?: (value: string) => void;
};