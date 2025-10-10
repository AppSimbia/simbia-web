export interface TextInputMultilineProps {
    placeholder: string;
    size?: 'sm' | 'md' | 'lg' | 'xg';
    rows?: number;
    value?: string;
    readonly?: boolean;
    onChange?: (value: string) => void;
};