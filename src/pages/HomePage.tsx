import React from 'react';
import { useSelector} from 'react-redux';

import {RootState} from '../store/root-reducer';

import EveryDayEssentials from "../components/EveryDayEssentials";
import {BigCards} from "../components/BigCards";
import ProductsWithAction from "../components/ProductsWithAction";

const HomePage = () => {
    const companiesArray = useSelector((state: RootState) => state.companies.companies);
    const productsArray = useSelector((state: RootState) => state.products.products);


    return (
        <div>
            <BigCards/>
            <EveryDayEssentials/>
            <ProductsWithAction/>

        </div>
    );
}

export default HomePage;
