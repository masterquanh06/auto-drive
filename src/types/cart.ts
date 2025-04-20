export interface CartItem {
    id: number;
    car_id: number;
    user_id: number;
    quantity: number;
    brand: string;
    model: string;
    price: number;
    subtotal: number;
}