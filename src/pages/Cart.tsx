import React from 'react';
import {
    StyledWhiteBody,
    StyledFlexDivCart,
} from "../styled/StyledComponents";

import {ShoppingCartProduct} from "../components/ShoppingCartProduct";
import {PayCard} from "../components/PayCard";

const Cart = () => {


    return (
        <StyledWhiteBody>
            <StyledFlexDivCart>
                <ShoppingCartProduct/>
                <PayCard/>
            </StyledFlexDivCart>
        </StyledWhiteBody>
    );
};

export default Cart;
