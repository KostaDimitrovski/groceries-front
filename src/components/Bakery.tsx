import { useSelector } from "react-redux";
import { RootState } from "../store/root-reducer";
import { StyledCardActions, StyledSmallCard, StyledViewProductsDiv } from "../styled/StyledComponents";
import { Button, CardContent, CardMedia, Grid, IconButton, Typography, Box, Pagination, Container } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React, { useState } from "react";

const Bakery = () => {
    const products = useSelector((state: RootState) => state.products.products);
    const bakeryProducts = products.filter(product => product.type === 'BAKERY');
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 15; // 5 products per row * 3 rows

    // Calculate total pages based on number of products and products per page
    const totalPages = Math.ceil(bakeryProducts.length / productsPerPage);

    // Function to handle page change
    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };

    const visibleProducts = bakeryProducts.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);

    return (
        <Container>
            <Box display="flex">
                {/* Sidebar for filters */}
                <Box sx={{ width: 250, p: 2, borderRight: '1px solid #ccc' }}>
                    <Typography variant="h6">Filters</Typography>
                    {/* Add your filter controls here */}
                    <Typography variant="subtitle1">Category</Typography>
                    {/* Category Filter Component */}
                    <Typography variant="subtitle1">Price</Typography>
                    {/* Price Filter Component */}
                </Box>


                <Box flex="1" p={2}>
                    <Grid container spacing={2}>
                        {visibleProducts.map((product: any) => (
                            <Grid item xs={12} sm={6} md={4} lg={2.4} key={product.id}>
                                <StyledSmallCard sx={{ position: 'relative' }}>
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
                                    </StyledCardActions>

                                    <CardContent>
                                        <Typography variant="h6" component="div" display="flex">
                                            {product.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {product.description}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{
                                                whiteSpace: 'nowrap',
                                                textOverflow: 'ellipsis',
                                            }}
                                        >
                                            {product.company.name}: {product.company.location}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {product.price} ден.
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

                    {/* Pagination controls */}
                    <Box display="flex" justifyContent="center" mt={4}>
                        <Pagination
                            count={totalPages}
                            page={currentPage}
                            onChange={handlePageChange}
                            color="primary"
                        />
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}

export default Bakery;
