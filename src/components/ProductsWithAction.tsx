import {Button, CardContent, CardMedia, Fab, Grid, IconButton, Typography} from "@mui/material";
import WestRoundedIcon from "@mui/icons-material/WestRounded";
import { StyledCardActions, StyledSmallCard, StyledTypo } from "../styled/StyledComponents";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/root-reducer";

const calculateNewPrice = (price: number, discount: string) => {
    const discountPercentage = parseFloat(discount) / 100;
    return price - (price * discountPercentage);
};

const ProductsWithAction = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const productsPerPage = 6; // Number of products per page
    const productsArray = useSelector((state: RootState) => state.products.products);

    const totalPages = Math.ceil(productsArray.length / productsPerPage);

    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const visibleProducts = productsArray.slice(currentPage * productsPerPage, (currentPage + 1) * productsPerPage);

    return (
        <>
            <div>
                <StyledTypo sx={{ paddingBottom: "30px" }} variant="h4">
                    Секојдневни производи
                </StyledTypo>
            </div>
            <Grid container alignItems="center" justifyContent={"center"} spacing={4}>
                <Grid item >
                    <Fab
                        disabled={currentPage === 0}
                        onClick={prevPage}
                        color="primary"
                        aria-label="previous page"
                        size="small"
                    >
                        <WestRoundedIcon fontSize="small" />
                    </Fab>
                </Grid>
                <Grid item >
                    <Grid container spacing={4} justifyContent="center">
                        {visibleProducts.map((product: any) => (
                            <Grid item xs={12} sm={6} md={"auto"} key={product.id} >
                                <StyledSmallCard sx={{ position: "relative" }}>
                                    <StyledCardActions>
                                        <CardMedia
                                            component="img"
                                            image={"https://chemwatch.net/wp-content/uploads/2021/11/image-6.jpeg"}
                                            alt={product.name}
                                            sx={{ width: '100%' }}
                                        />
                                        <IconButton size={"small"}
                                                    sx={{
                                                        position: 'absolute',
                                                        top: 4,
                                                        right: 2,
                                                        backgroundColor: 'white',
                                                        '&:hover': {
                                                            backgroundColor: 'white',
                                                        }
                                                    }}
                                        >
                                            <FavoriteBorderIcon fontSize={"small"} />
                                        </IconButton>
                                        {product.discount && (
                                            <Typography
                                                variant="body2"
                                                color="error"
                                                sx={{
                                                    position: 'absolute',
                                                    top: 4,
                                                    left: 4,
                                                    backgroundColor: '#FFEBEE',
                                                    padding: '2px 4px',
                                                    borderRadius: '4px',
                                                }}
                                            >
                                                -{product.discount}
                                            </Typography>
                                        )}
                                    </StyledCardActions>

                                    <CardContent>
                                        <Typography  component="div" display="flex" sx={{
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            font: 'bold'
                                        }}>
                                            {product.name}: {product.description}
                                        </Typography>

                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{
                                                whiteSpace: 'nowrap',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                            }}
                                        >
                                            {product.company.name}- {product.company.location}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            <span style={{ textDecoration: 'line-through' }}>{product.price} ден.</span>
                                        </Typography>

                                        <Typography variant="body2" color="text.secondary">
                                            {calculateNewPrice(product.price, product.discount).toFixed(2)} ден.
                                        </Typography>
                                    </CardContent>

                                    <StyledCardActions>
                                        <Button
                                            variant="contained"
                                            size={"small"}
                                            sx={{
                                                bottom: 14, right: 4, backgroundColor: '#5AC268',
                                                '&:hover': {
                                                    backgroundColor: '#4E9B56',
                                                },

                                                textTransform: "none"

                                            }}
                                        >
                                            додади
                                        </Button>
                                    </StyledCardActions>
                                </StyledSmallCard>
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
                        <EastRoundedIcon fontSize="small" />
                    </Fab>
                </Grid>
            </Grid>
        </>
    );
}
export default ProductsWithAction;
