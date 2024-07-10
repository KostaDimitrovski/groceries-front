
export interface Product {
    name: string;
    description: string;
    price: number;
    quantity: number;
    discount: string;
    homeAddress: string;
    companyId: number;
}

export interface Company {
    companyName: string;
    companyAddress: string;
    companyPhone: string;
    companyEmail: string;
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
