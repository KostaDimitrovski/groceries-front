import React from 'react';
import {
    SearchDiv,
    SearchIconDiv,
    StyledButton,
    StyledHeader,
    StyledSearchBar
} from "../styled/StyledComponents";
import { Grid, IconButton, Box } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate('/login');
    };
    const goToRegister = () => {
        navigate('/register');
    };
    const goToCart = () => {
        navigate('/cart');
    };
    const goToHomePage = () => {
        navigate('/');
    };
    const goToShop = () => {
        navigate('/products');
    };

    return (
        <StyledHeader>
            <Grid container alignItems="center" justifyContent="space-between">
                <Grid item>
                    <Grid container alignItems="center" spacing={2}>
                        <Grid item>
                            <IconButton edge="start" color="inherit" aria-label="menu" onClick={goToHomePage}>
                                🍉
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <StyledButton>
                                Company name
                            </StyledButton>
                        </Grid>
                        <Grid item>
                            <StyledButton onClick={goToHomePage}>
                                Home
                            </StyledButton>
                        </Grid>
                        <Grid item>
                            <StyledButton onClick={goToShop}>
                                Shop
                            </StyledButton>
                        </Grid>
                        <Grid item>
                            <SearchDiv>
                                <SearchIconDiv>
                                    <SearchIcon color="disabled" fontSize="small" />
                                </SearchIconDiv>
                                <StyledSearchBar placeholder="Побарајте производ:" />
                            </SearchDiv>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container alignItems="center" spacing={2}>
                        <Grid item>
                            <IconButton>
                                <FavoriteBorderIcon />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton onClick={goToCart}>
                                <ShoppingCartOutlinedIcon />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <StyledButton onClick={goToLogin}>
                                LOG IN
                            </StyledButton>
                        </Grid>
                        <Grid item>
                            <StyledButton onClick={goToRegister}>
                                SIGN UP
                            </StyledButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </StyledHeader>
    );
};

export default Header;
