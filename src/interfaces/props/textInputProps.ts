export interface TextInputProps {
    placeholder: string;
    size?: 'sm' | 'md' | 'lg' | 'xg';
    variant?: 'default' | 'underline';
    value?: string;
    readonly?: boolean;
    onChange?: (value: string) => void;
};