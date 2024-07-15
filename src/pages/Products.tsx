import {useSelector} from "react-redux";
import React from "react";

import {RootState} from "../store/root-reducer";

const Products = () => {
    const productsArray = useSelector((state: RootState) => state.products.products);
    const companiesArray = useSelector((state: RootState) => state.companies.companies);
    return (
        <>
            <div>
                {productsArray.map((product: any) => (
                    <div key={product.id}>
                        <p>{product.name}</p>
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                        <p>{product.volume}</p>
                        <p>{product.pictureUrl}</p>

                    </div>
                ))}
            </div>
            <div>
                {companiesArray.map((company: any) => (
                    <div key={company.id}>
                        <p>{company.name}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
export default Products