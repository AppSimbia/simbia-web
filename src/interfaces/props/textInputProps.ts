export interface TextInputProps {
    placeholder: string;
    size?: 'md';
    value?: string;
    onChange: (value: string) => void;
};