export interface Specs {
    mileage: string;
    fuel: string;
    transmission: string;
  }
  
  export interface Vehicle {
    id: number;
    name: string;
    price: number;
    image: string;
    des: string;
    specs: Specs;
    tag?: string;
    type: string;
  }
  
  export interface CartItem extends Vehicle {
    quantity: number;
  }