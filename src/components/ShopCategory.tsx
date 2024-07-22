import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/root-reducer";
import {
    Box,
    Checkbox,
    Container,
    FormControlLabel,
    FormGroup,
    Grid,
    MenuItem,
    Pagination,
    Select,
    SelectChangeEvent,
    Slider,
    Typography,
} from "@mui/material";
import {
    SearchDiv,
    SearchIconDiv,
    StyledSearchBar,
} from "../styled/StyledComponents";
import SearchIcon from "@mui/icons-material/Search";
import { addItemToCart, removeItemFromCart } from "../store/cart/cart.action";
import ProductCard from "./ProductCard";
import { addItemToWishlist, removeItemFromWishlist } from "../store/wishlist/wishlist.action";

interface ShopCategoryProps {
    category: string;
    logo: any;
}

const ShopCategory: React.FC<ShopCategoryProps> = ({ category, logo }) => {
    const products = useSelector((state: RootState) => state.products.products);
    const categoryProducts = products.filter((product) => product.type === category);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 10;
    const [selectedCompany, setSelectedCompany] = useState("");
    const [selectedLocation, setSelectedLocation] = useState("");
    const [priceRange, setPriceRange] = useState<number[]>([0, 1000]);
    const [showDiscount, setShowDiscount] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const cartItems = useSelector((state: RootState) => state.cart.cartItems);
    const wishlistItems = useSelector((state: RootState) => state.wishlist.wishlistItems);
    const companies1 = useSelector((state: RootState) => state.companies.companies);

    const dispatch = useDispatch();
    const addProductWishList = (product: any) => {
        dispatch(addItemToWishlist(wishlistItems, product));
    };
    const addProduct = (product: any) => {
        dispatch(addItemToCart(cartItems, product));
    };
    const removeProduct = (product: any) => {
        dispatch(removeItemFromCart(cartItems, product));
    };
    const removeProductFromWishList = (product: any) => {
        dispatch(removeItemFromWishlist(wishlistItems, product));
    };

    const handleCompanyChange = (event: SelectChangeEvent<string>) => {
        setSelectedCompany(event.target.value);
    };

    const handleLocationChange = (event: SelectChangeEvent<string>) => {
        setSelectedLocation(event.target.value);
    };

    const handlePriceChange = (event: Event, newValue: number | number[]) => {
        setPriceRange(newValue as number[]);
    };

    const handleDiscountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setShowDiscount(event.target.checked);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const filteredProducts = categoryProducts.filter((product) => {
        return (
            (selectedCompany === "" || product.company.name === selectedCompany) &&
            (selectedLocation === "" || product.company.location === selectedLocation) &&
            product.price >= priceRange[0] &&
            product.price <= priceRange[1] &&
            (!showDiscount || (product.discount && parseFloat(product.discount) > 0)) &&
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    });

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const visibleProducts = filteredProducts.slice(
        (currentPage - 1) * productsPerPage,
        currentPage * productsPerPage
    );

    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };

    return (
        <Container sx={{ paddingTop: 10 }}>
            <Grid container spacing={5}>
                <Grid item xs={12} md={3}>
                    <Typography component="div" variant={'h4'} display="flex" sx={{
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                    }}>
                        {category} {logo}
                    </Typography>

                    <Box>
                        <Typography variant="subtitle1">Филтер</Typography>
                        <SearchDiv>
                            <SearchIconDiv>
                                <SearchIcon />
                            </SearchIconDiv>
                            <StyledSearchBar
                                value={searchQuery}
                                onChange={handleSearchChange}
                                placeholder="Побарај продукт"
                                inputProps={{ "aria-label": "search" }}
                            />
                        </SearchDiv>
                    </Box>
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle1">Company</Typography>
                        <Select
                            value={selectedCompany}
                            onChange={handleCompanyChange}
                            fullWidth
                            displayEmpty
                        >
                            <MenuItem value="">All</MenuItem>
                            {companies1.map((company) => (
                                <MenuItem key={company.id} value={company.name}>
                                    {company.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </Box>
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle1">Location</Typography>
                        <Select
                            value={selectedLocation}
                            onChange={handleLocationChange}
                            fullWidth
                            displayEmpty
                        >
                            <MenuItem value="">All</MenuItem>
                            {companies1
                                .map((company) => (
                                    <MenuItem key={company.id} value={company.location}>
                                        {company.location}
                                    </MenuItem>
                                ))}
                        </Select>
                    </Box>
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle1">Цена</Typography>
                        <Slider
                            value={priceRange}
                            onChange={handlePriceChange}
                            valueLabelDisplay="auto"
                            min={0}
                            max={1000}
                        />
                    </Box>

                    <Box sx={{ mb: 2 }}>
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={showDiscount}
                                        onChange={handleDiscountChange}
                                    />
                                }
                                label="Прикажи продукти со попуст"
                            />
                        </FormGroup>
                    </Box>
                </Grid>

                <Grid item xs={12} md={9}>
                    <Grid container spacing={6}>
                        {visibleProducts.map((product: any) => (
                            <Grid item xs={12} sm={6} md={4} lg={2.4} key={product.id}>
                                <ProductCard product={product} addProduct={addProduct} removeProduct={removeProduct}
                                             addToWishlist={addProductWishList}
                                             removeFromWishlist={removeProductFromWishList} />
                            </Grid>
                        ))}
                    </Grid>
                    <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                        <Pagination
                            count={totalPages}
                            page={currentPage}
                            onChange={handlePageChange}
                            color="primary"
                        />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default ShopCategory;
