import React, { useState } from 'react';
import cartLogin from '../pictures/cart.png';
import GoogleIcon from '@mui/icons-material/Google';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {
    Container,
    CssBaseline,
    Box,
    Typography,
    TextField,
    Grid,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import {
    StyledAuthButton,
    StyledWhiteBody,
    StyledDivPicuture,
    StyledFlexDiv
} from "../styled/StyledComponents";
import axios from '../custom-axios';
import {useDispatch} from "react-redux";
import {login} from "../store/user/authSlice";

const Login: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('/auth/authenticate', { email, password });
            const { token } = response.data;
            const { refreshToken } = response.data;
            dispatch(login({ username: email, token, refreshToken }));
            localStorage.setItem('token', token);
            navigate('/');
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    return (
        <>
            <StyledWhiteBody>
                <StyledFlexDiv>
                    <Container maxWidth="xs">
                        <CssBaseline/>
                        <Box
                            sx={{
                                mt: 20,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <div>
                                <Typography variant="h6">Добродојдовте 👋</Typography>
                                <br/>
                                <Typography variant="h4">Продолжете со најава</Typography>
                            </div>
                            <StyledAuthButton
                                fullWidth
                                variant="contained"
                                sx={{mt: 3, mb: 2}}
                                onClick={handleLogin}
                            >
                                НАЈАВЕТЕ СЕ СО GOOGLE
                            </StyledAuthButton>

                            <Box sx={{mt: 1}}>
                                <TextField
                                    variant={"filled"}
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoFocus
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />

                                <TextField
                                    margin="normal"
                                    variant="filled"
                                    required
                                    fullWidth
                                    id="password"
                                    name="password"
                                    label="Password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />

                                <StyledAuthButton
                                    fullWidth
                                    variant="contained"
                                    sx={{mt: 3, mb: 2}}
                                    onClick={handleLogin}
                                >
                                    ПРОДОЛЖЕТЕ
                                </StyledAuthButton>

                                <Grid container justifyContent={"flex-end"}>
                                    <Grid item>
                                        <Link to="/register">Немате акаунт? Регистрирајте се</Link>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Container>
                    <StyledDivPicuture>
                        <img src={cartLogin} alt={"Cart"}/>
                    </StyledDivPicuture>
                </StyledFlexDiv>
            </StyledWhiteBody>
        </>
    );
};

export default Login;
