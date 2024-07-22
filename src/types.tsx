
export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    discount: string;
    volume: string;
    type: string;
    pictureUrl: string;
    company: Company;
}
export interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;

}

export interface Cart {
    isCartOpen: boolean;
    cartItems: CartItem[];
    cartCount: number;
    cartTotal: number;
}

export interface Company {
    id: number;
    name: string;
    address: string;
    phone: string;
    email: string;
    location: string;
    products: Product[];
}

export interface ProductsMap {
    [key: string]: Product;
}
export interface CompaniesMap {
    [key: string]: Company;
}
export interface User {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    username: string;
    role: "USER";
    password: string;
}
