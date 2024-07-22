import {
    StyledButton,
    StyledDivider,
    StyledFlexDivWish,
    StyledProductsGrid,
    StyledTypo
} from "../styled/StyledComponents";
import {Badge, ButtonBase, Grid, Stack, Typography} from "@mui/material";
import orange from "../pictures/orange.jpeg";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/root-reducer";
import {addItemToCart, clearItemFromCart, removeItemFromCart} from "../store/cart/cart.action";

const calculateNewPrice = (price: number, discount: string): number => {
    const discountPercentage = parseFloat(discount) / 100;
    const newPrice = price - (price * discountPercentage);
    return Math.floor(newPrice);
};
export const ShoppingCartProduct = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.cartItems);
    const addProductHandler = (product: any) => {
        dispatch(addItemToCart(cartItems, product));
    };
    const removeProductHandler = (product: any) => {
        dispatch(removeItemFromCart(cartItems, product));
    };

    const clearItemHandler = (product: any) => {
        dispatch(clearItemFromCart(cartItems, product));
    };


    return (
        <>
            <StyledFlexDivWish>
            <StyledTypo variant="h4">Твојата кошничка</StyledTypo>
            <StyledDivider orientation={"vertical"}/>
            <Stack spacing={3} alignItems="center" justifyContent="center">
                {cartItems.map((item: any) => (
                    <StyledProductsGrid key={item.id}>
                        <Grid container spacing={1} direction="row" alignItems="center">
                            <Grid item sx={{position: 'relative', overflow: 'visible'}}>
                                {item.discount && parseFloat(item.discount) > 0 ? (
                                    <Badge
                                        badgeContent={`-${item.discount}`}
                                        color="primary"
                                        sx={{
                                            position: 'absolute',
                                            top: 5,
                                            left: 20,
                                            transform: 'translate(-50%, -50%)'
                                        }}
                                    />
                                ) : null}
                                <ButtonBase sx={{width: 64, height: 64}}>
                                    <img
                                        src={orange}
                                        alt={item.name}
                                        style={{width: '70%', height: '70%'}}
                                    />
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container alignItems={'flex-start'}>
                                <Grid item xs container direction="column" spacing={0}>
                                    <Grid item xs>
                                        <Typography component="div" display="flex" sx={{
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            font: 'bold'
                                        }}>
                                            {item.name}: {item.description}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {item.company.name}- {item.company.location}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item sm container alignItems={'center'}>
                                <Typography align={"left"} variant="subtitle1" display="flex">
                                    {item.quantity}кол.
                                </Typography>
                                <Grid item xs container direction="column" alignItems="center" spacing={0}>
                                    <StyledButton onClick={() => addProductHandler(item)}>
                                        <ArrowDropUpIcon/>
                                    </StyledButton>
                                    <StyledButton onClick={() => removeProductHandler(item)}>
                                        <ArrowDropDownIcon/>
                                    </StyledButton>
                                </Grid>
                                <Typography sx={{paddingRight: "25px"}}>
                                    {item.discount && parseFloat(item.discount) > 0 ? (
                                        <>

                                            <Typography
                                            >
                                                {calculateNewPrice(item.price, item.discount) * item.quantity} ден

                                            </Typography>
                                            <Typography variant="body2" color="text.secondary"
                                                        sx={{paddingleft: '10px'}}>
                                                {item.quantity} x {calculateNewPrice(item.price, item.discount)} ден
                                            </Typography>
                                        </>
                                    ) : (
                                        <>
                                            <Typography
                                            >
                                                {item.price * item.quantity} ден
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {item.quantity} x {item.price} ден
                                            </Typography>
                                        </>)}
                                </Typography>
                                <Grid item direction="column"
                                      justifyContent="space-around"
                                      alignItems="flex-end">
                                    <DeleteOutlinedIcon onClick={() => clearItemHandler(item)}/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </StyledProductsGrid>
                ))}
            </Stack>
            </StyledFlexDivWish>
        </>
    )
}