import React from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/root-reducer";
import { Badge, Button, Grid, Typography, Box, IconButton } from "@mui/material";
import orange from "../pictures/orange.jpeg";
import {removeItemFromCart} from "../store/cart/cart.action";
import ClearIcon from '@mui/icons-material/Clear';

const calculateNewPrice = (price: number, discount: string) => {
    const discountPercentage = parseFloat(discount) / 100;
    return price - (price * discountPercentage);
};

const CartDropdown: React.FC = () => {
    const cartItems = useSelector((state: RootState) => state.cart.cartItems);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const calculateDiscountedTotal = () => {
        return cartItems.reduce((total, item) => {
            const discountPercentage = parseFloat(item.discount);
            const discountedPrice = item.price * (1 - discountPercentage / 100);
            return total + discountedPrice * item.quantity;
        }, 0);
    };

    const discountedTotal = calculateDiscountedTotal();

    const goToCheckoutHandler = () => {
        navigate('/cart');
    }

    const removeItemHandler = (item: any) => {
        dispatch(removeItemFromCart(cartItems,item));
    }

    return (
        <Box
            sx={{
                position: 'absolute',
                width: '300px',
                height: '400px',
                display: 'flex',
                flexDirection: 'column',
                padding: '20px',
                border: '1px solid black',
                backgroundColor: 'white',
                top: '90px',
                right: '40px',
                zIndex: '5'
            }}
        >
            <Grid container direction="row" sx={{ height: 'auto', overflowY: 'auto' }}>
                {cartItems.length ? (
                    cartItems.map((item) => (
                        <Grid container key={item.id} sx={{ mb: 1, alignItems: 'center', position: 'relative' }}>
                            <Grid item xs={4}>
                                <Box sx={{ position: 'relative', width: '75%', height: 'auto' }}>
                                    <img
                                        src={orange}
                                        alt={item.name}
                                        style={{ width: '100%', height: 'auto' }}
                                    />
                                    {parseFloat(item.discount) > 0 && (
                                        <Badge
                                            badgeContent={`-${item.discount}`}
                                            color="primary"
                                            sx={{
                                                position: 'absolute',
                                                top: 10,
                                                right: 10,
                                                transform: 'translate(-50%, -50%)'
                                            }}
                                        />
                                    )}
                                </Box>
                            </Grid>
                            <Grid item xs={8}>
                                <Box sx={{ pl: 2 }}>
                                    <Typography variant="body2">
                                        {item.name} {item.description}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {item.company.name} - {item.company.location}
                                    </Typography>
                                    <Typography variant="body2">
                                        {item.quantity} x {calculateNewPrice(item.price, item.discount).toFixed(0)} ден
                                    </Typography>
                                </Box>
                            </Grid>
                            <IconButton
                                sx={{ position: 'absolute', top: 0, right: 0 }}
                                onClick={() => removeItemHandler(item)}
                            >
                                <ClearIcon />
                            </IconButton>
                        </Grid>
                    ))
                ) : (
                    <Typography variant="body2">Your cart is empty</Typography>
                )}
            </Grid>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                    marginTop: 'auto',
                    borderTop: '1px solid #ddd',
                    paddingTop: '10px'
                }}
            >
                <Typography>Вкупно: {discountedTotal.toFixed(0)} ден.</Typography>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#5AC268',
                        '&:hover': {
                            backgroundColor: '#4E9B56',
                        },
                    }}
                    onClick={goToCheckoutHandler}
                >
                    Наплати
                </Button>
            </Grid>
        </Box>
    );
}

export default CartDropdown;
