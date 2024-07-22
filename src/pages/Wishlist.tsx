import ProductCard from "../components/ProductCard";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/root-reducer";
import {addItemToCart, removeItemFromCart} from "../store/cart/cart.action";
import {addItemToWishlist, removeItemFromWishlist} from "../store/wishlist/wishlist.action";
import {Grid} from "@mui/material";


export const Wishlist = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const productsPerPage = 6;
    const productsArray = useSelector((state: RootState) => state.wishlist.wishlistItems);
    const totalPages = Math.ceil(productsArray.length / productsPerPage);
    const cartItems = useSelector((state: RootState) => state.cart.cartItems);
    const wishlistItems = useSelector((state: RootState) => state.wishlist.wishlistItems);
    const dispatch = useDispatch();
    const addProduct = (product: any) => {
        dispatch(addItemToCart(cartItems, product));
    };
    const addProductWishList = (product: any) => {
        dispatch(addItemToWishlist(wishlistItems, product));
    };
    const removeProductFromWishList = (product: any) => {
        dispatch(removeItemFromWishlist(wishlistItems, product));
    };
    const removeProduct = (product: any) => {
        dispatch(removeItemFromCart(cartItems, product));
    };
    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        setCurrentPage(currentPage - 1);
    };
    return (
        <Grid container spacing={4} justifyContent="center">
            {productsArray.map((product: any) => (
                <Grid item xs={12} sm={6} md={"auto"} key={product.id}>
                    <ProductCard product={product} addProduct={addProduct} removeProduct={removeProduct} addToWishlist={addProductWishList} removeFromWishlist={removeProductFromWishList}/>
                </Grid>
            ))}
        </Grid>
    )
}