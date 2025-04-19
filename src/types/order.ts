export interface Order {
    id: number;
    user_id: number;
    total: number;
    created_at: string;
    items: {
        car_id: number;
        quantity: number;
        price: number;
    }[];
}
