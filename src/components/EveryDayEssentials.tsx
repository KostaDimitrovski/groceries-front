import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/root-reducer";
import {addItemToCart, removeItemFromCart} from "../store/cart/cart.action";
import {Grid, Fab} from "@mui/material";
import WestRoundedIcon from "@mui/icons-material/WestRounded";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import {StyledTypo} from "../styled/StyledComponents";
import ProductCard from "./ProductCard";
import {addItemToWishlist, removeItemFromWishlist} from "../store/wishlist/wishlist.action";

const EveryDayEssentials = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const productsPerPage = 6;
    const productsArray = useSelector((state: RootState) => state.products.products);
    const EssentialProducts = productsArray; // todo: category - essentials
    const totalPages = Math.ceil(EssentialProducts.length / productsPerPage);
    const cartItems = useSelector((state: RootState) => state.cart.cartItems);
    const dispatch = useDispatch();
    const wishlistItems = useSelector((state: RootState) => state.wishlist.wishlistItems);
    const addProduct = (product: any) => {
        dispatch(addItemToCart(cartItems, product));
    };
    const removeProduct = (product: any) => {
        dispatch(removeItemFromCart(cartItems, product));
    };
    const addProductWishList = (product: any) => {
        dispatch(addItemToWishlist(wishlistItems, product));
    };
    const removeProductFromWishList = (product: any) => {
        dispatch(removeItemFromWishlist(wishlistItems, product));
    };
    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const visibleProducts = EssentialProducts.slice(currentPage * productsPerPage, (currentPage + 1) * productsPerPage);

    return (
        <>
            <Grid container alignItems="center" justifyContent={"center"} spacing={4}>
                <Grid item xs={12}>
                    <StyledTypo variant="h4">
                        Essentials
                    </StyledTypo>
                </Grid>
                <Grid item>
                    <Fab
                        disabled={currentPage === 0}
                        onClick={prevPage}
                        color="primary"
                        aria-label="previous page"
                        size="small"
                    >
                        <WestRoundedIcon fontSize="small"/>
                    </Fab>
                </Grid>
                <Grid item>
                    <Grid container spacing={4} justifyContent="center">
                        {visibleProducts.map((product: any) => (
                            <Grid item xs={12} sm={6} md={"auto"} key={product.id}>
                                <ProductCard product={product} addProduct={addProduct} removeProduct={removeProduct} addToWishlist={addProductWishList} removeFromWishlist={removeProductFromWishList}/>

                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid item>
                    <Fab
                        disabled={currentPage === totalPages - 1}
                        onClick={nextPage}
                        color="primary"
                        aria-label="next page"
                        size="small"
                    >
                        <EastRoundedIcon fontSize="small"/>
                    </Fab>
                </Grid>
            </Grid>
        </>
    );
}

export default EveryDayEssentials;
