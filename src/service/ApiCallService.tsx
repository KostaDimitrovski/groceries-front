import axios from '../custom-axios'

interface Product {

    name: string;
    description: string;
    price: number;
    quantity: number;
    discount: string;
    homeAddress: string;
    companyId: number;

}
interface Company {

    companyName: string;
    companyAddress: string;
    companyPhone: string;
    companyEmail: string;

}

interface User {

    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    username: string;
    role: "USER";
    password: string;

}


const ApiCallService = {
    fetchUsers: (): Promise<any> => {
        return axios.get("/users/list");
    },
    fetchUser: (id: number): Promise<any> => {
        return axios.get(`/users/${id}`);
    },
    editUser: (id:number, user: User): Promise<any> => {
        return axios.put(`/users/edit/${id}`,user);
    },
    deleteUser: (id: number): Promise<any> => {
        return axios.delete(`/users/delete/${id}`);
    },
    addUser: (user: User): Promise<any> => {
        return axios.post("/users/add",user);
    },


    fetchProducts: (): Promise<any> => {
        return axios.get("/products/list");
    },
    fetchProduct: (id: number): Promise<any> => {
        return axios.get(`/products/${id}`);
    },
    editProduct: (id:number, product: Product): Promise<any> => {
        return axios.put(`/products/edit/${id}`,product);
    },
    deleteProduct: (id: number): Promise<any> => {
        return axios.delete(`/products/delete/${id}`);
    },
    addProduct: (product: Product): Promise<any> => {
        return axios.post("/products/add",product);
    },




    fetchCompanies: (): Promise<any> => {
        return axios.get("/companies/list");
    },
    fetchCompany: (id: number): Promise<any> => {
        return axios.get(`/companies/${id}`);
    },
    editCompany: (id:number, company: Company): Promise<any> => {
        return axios.put(`/companies/edit/${id}`,company);
    },
    deleteCompany: (id: number): Promise<any> => {
        return axios.delete(`/companies/delete/${id}`);
    },
    addCompany: (company: Company): Promise<any> => {
        return axios.post("/companies/add",company);
    }






}

export default ApiCallService