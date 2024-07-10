import React from 'react';

import {
    Box,
    Container,
    CssBaseline,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import {useState} from "react";
import {Link} from "react-router-dom";
import {
    GoogleButton,
    StyledAuthButton,
    StyledDivPicuture,
    StyledFlexDiv,
    StyledWhiteBody
} from "../styled/StyledComponents";
import GoogleIcon from "@mui/icons-material/Google";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import cartLogin from "../pictures/cart.png";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {
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
                                <Typography variant="h4">Продолжете со регистрација</Typography>
                            </div>
                            <GoogleButton
                                fullWidth

                                variant="contained"
                                sx={{mt: 3, mb: 2}}
                            >
                                <GoogleIcon fontSize={"small"} sx={{marginRight: 1}}/>
                                Најавете се со Google
                            </GoogleButton>

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
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
                                />
                                <TextField
                                    margin="normal"
                                    variant="filled"
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
                                    color={"secondary"}
                                    variant="contained"
                                    sx={{mt: 3, mb: 2}}
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
                    <StyledDivPicuture>
                        <img src={cartLogin} alt={"Cart"}/>
                    </StyledDivPicuture>
                </StyledFlexDiv>
            </StyledWhiteBody>
        </>
    );
};

export default Register;