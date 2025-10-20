export interface Payment {
    value: number;
    quantity: number;
    paymentMethod: 'Pix' | 'Externo';
};