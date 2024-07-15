
export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    discount: string;
    volume: string;
    type: string;
    pictureUrl: string; // Assuming this should be a URL string
    company: Company; // Type defined as Company
}

export interface Company {
    id: number;
    name: string;
    address: string;
    phone: string;
    email: string;
    location: string;
    products: Product[]; // Type defined as an array of Product
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
