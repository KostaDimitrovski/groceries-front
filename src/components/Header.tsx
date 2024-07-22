import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../store/root-reducer';
import {setUserFromStorage, logout} from '../store/user/authSlice';
import {
    SearchDiv,
    SearchIconDiv,
    StyledButton,
    StyledHeader,
    StyledSearchBar
} from "../styled/StyledComponents";
import {Grid, IconButton, Menu, MenuItem, Avatar, Badge} from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {useNavigate} from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import {deepOrange} from '@mui/material/colors';
import {selectIsCartOpen, selectCartCount} from "../store/cart/cart.selector";
import {setIsCartOpen} from "../store/cart/cart.action";
import CartDropdown from './CartDropdown';
import {selectCartItems} from "../store/wishlist/wishlist.selector";

const Header: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.auth.user);
    const [avatarMenuAnchor, setAvatarMenuAnchor] = useState<null | HTMLElement>(null);
    const cartCount = useSelector(selectCartCount);
    const wishlistItems = useSelector(selectCartItems);
    const isCartOpen = useSelector(selectIsCartOpen);
    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
    useEffect(() => {
        dispatch(setUserFromStorage());
    }, [dispatch]);

    const goToLogin = () => {
        navigate('/login');
    };

    const goToRegister = () => {
        navigate('/register');
    };


    const goToHomePage = () => {
        navigate('/');
    };

    const goToShop = () => {
        navigate('/products');
    };

    const handleLogout = () => {
        dispatch(logout());
        setAvatarMenuAnchor(null);
    };

    const handleAvatarClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAvatarMenuAnchor(event.currentTarget);
    };

    const handleCloseAvatarMenu = () => {
        setAvatarMenuAnchor(null);
    };

    const goToWishlist = ()=> {
        navigate('/wishlist');
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
                                    <SearchIcon color="disabled" fontSize="small"/>
                                </SearchIconDiv>
                                <StyledSearchBar placeholder="Побарајте производ:"/>
                            </SearchDiv>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container alignItems="center" spacing={2}>
                        <Grid item>
                            <IconButton onClick={goToWishlist}>
                                <Badge badgeContent={wishlistItems.length} color="secondary" >
                                    <FavoriteBorderIcon/>
                                </Badge>
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton onClick={toggleIsCartOpen}>
                                <Badge badgeContent={cartCount} color="primary">
                                    <ShoppingCartOutlinedIcon/>
                                </Badge>
                            </IconButton>
                            {isCartOpen && <CartDropdown />}
                        </Grid>
                        {user ? (
                            <>
                                <Grid item>
                                    <IconButton onClick={handleAvatarClick}>
                                        <Avatar sx={{bgcolor: deepOrange[500]}}>{user.username[0]}</Avatar>
                                    </IconButton>
                                    <Menu
                                        anchorEl={avatarMenuAnchor}
                                        open={Boolean(avatarMenuAnchor)}
                                        onClose={handleCloseAvatarMenu}
                                    >
                                        <MenuItem onClick={handleLogout}>Одјави се</MenuItem>
                                        <MenuItem onClick={handleLogout}>Историја на нарачки</MenuItem>
                                        <MenuItem onClick={handleLogout}>Уреди го профилот</MenuItem>
                                    </Menu>
                                </Grid>
                            </>
                        ) : (
                            <>
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
                            </>
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </StyledHeader>
    );
};

export default Header;
