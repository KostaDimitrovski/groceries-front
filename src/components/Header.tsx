import React from 'react';
import {
    SearchDiv,
    SearchIconDiv,
    StyledButton,
    StyledHeader,
    StyledLeftDiv, StyledRightDiv,
    StyledSearchBar
} from "../styled/StyledComponents";
import {IconButton} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {useNavigate} from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
    const navigate = useNavigate();
    const goToLogin = () => {
        navigate('/login'); // Adjust the route as needed
    };
    const goToRegister = () => {
        navigate('/register'); // Adjust the route as needed
    };
    const goToCart = () => {
        navigate('/cart'); // Adjust the route as needed
    };
    return (
        <StyledHeader>
            {/*<img src={"https://www.creativefabrica.com/wp-content/uploads/2018/11/Watermelon-logo-by-meisuseno.jpg"}></img>*/}
            <StyledLeftDiv>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon/>
                </IconButton>
                <StyledButton>
                    Company name
                </StyledButton>
                <StyledButton>
                    Home
                </StyledButton>
                <StyledButton>
                    Shop
                </StyledButton>
                <SearchDiv>
                    <SearchIconDiv>
                        <SearchIcon  color="disabled" fontSize={"small"}/>
                    </SearchIconDiv>
                    <StyledSearchBar placeholder="Побарајте производ:"/>
                </SearchDiv>
            </StyledLeftDiv>
            <StyledRightDiv>
                <IconButton>
                    <FavoriteBorderIcon/>
                </IconButton>
                <IconButton onClick={goToCart}>
                    <ShoppingCartOutlinedIcon/>
                </IconButton>

                <StyledButton onClick={goToLogin} >
                    LOG IN
                </StyledButton>
                <StyledButton onClick={goToRegister}>
                    SIGN UP
                </StyledButton>
            </StyledRightDiv>

        </StyledHeader>
    )
}

export default Header