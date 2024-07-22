import React, { useState } from 'react';
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
    StyledFlexDiv,
    StyledWhiteBody
} from "../styled/StyledComponents";
import axios from '../custom-axios';

const Register = () => {
    const [name, setName] = useState("");
    const [lastName, setlastName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            const response = await axios.post('/auth/register', { name, email, password, phone, address, lastName });
            const { token } = response.data;
            localStorage.setItem('token', token);
            navigate('/login');
        } catch (error) {
            console.error('Registration error:', error);

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
                                mt: 5,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <div>
                                <Typography variant="h6">Добродојдовте 👋</Typography>
                                <br/>
                                <Typography variant="h4" sx={{
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    font: 'bold'
                                }}>Продолжете со регистрација</Typography>
                            </div>
                            <StyledAuthButton
                                fullWidth
                                variant="contained"
                                sx={{mt: 3, mb: 2}}
                            >
                                <GoogleIcon fontSize={"small"} sx={{marginRight: 1}}/>
                                НАЈАВЕТЕ СЕ СО GOOGLE
                            </StyledAuthButton>
                            <Box sx={{mt: 1}}>
                                <TextField
                                    margin="normal"
                                    size='small'
                                    variant="filled"
                                    required
                                    fullWidth
                                    id="password"
                                    name="first name"
                                    label="Име"
                                    type="first name"
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                    }}
                                />
                                <TextField
                                    margin="normal"
                                    size='small'
                                    variant="filled"
                                    required
                                    fullWidth
                                    id="password"
                                    name="last name"
                                    label="Презиме"
                                    type="last name"
                                    value={lastName}
                                    onChange={(e) => {
                                        setlastName(e.target.value);
                                    }}
                                />
                                <TextField
                                    variant={"filled"}
                                    margin="normal"
                                    required
                                    size='small'

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
                                    size='small'
                                    variant="filled"
                                    required
                                    fullWidth
                                    id="phone"
                                    name="phone"
                                    label="Мобилен телефон"
                                    type="phone"
                                    value={phone}
                                    onChange={(e) => {
                                        setPhone(e.target.value);
                                    }}
                                />
                                <TextField
                                    margin="normal"
                                    variant="filled"
                                    size='small'
                                    required
                                    fullWidth
                                    id="address"
                                    name="address"
                                    label="Адреса на живеење"
                                    type="address"
                                    value={address}
                                    onChange={(e) => {
                                        setAddress(e.target.value);
                                    }}
                                />
                                <TextField
                                    margin="normal"
                                    size='small'

                                    variant="filled"
                                    required
                                    fullWidth
                                    id="password"
                                    name="password"
                                    label="Password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
                                />
                                <TextField
                                    margin="normal"
                                    variant="filled"
                                    size='small'

                                    required
                                    fullWidth
                                    id="password"
                                    name="password"
                                    label="Password confirm"
                                    type="password"
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
                                />

                                <StyledAuthButton
                                    fullWidth
                                    variant="contained"
                                    sx={{mt: 3, mb: 2}}
                                    onClick={handleRegister}
                                >
                                    ПРОДОЛЖЕТЕ
                                    <NavigateNextIcon/>
                                </StyledAuthButton>

                                <Grid container justifyContent={"flex-end"}>
                                    <Grid item>
                                        <Link to="/login">Најава</Link>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Container>

                </StyledFlexDiv>
            </StyledWhiteBody>
        </>
    );
};

export default Register;
