import React, {useState} from 'react';
import {
    StyledDivider,
    StyledFlexDivWish,
    StyledProductsGrid,
    StyledTypo,
    StyledWhiteBody,
    StyledFlexDivCart,
    StyledProductsBox,
    StyledCardDiv,
    StyledCardField,
    StyledButton,
    StyledAuthButton,

} from "../styled/StyledComponents";
import {Button, ButtonBase, Divider, Grid, Stack,Typography} from '@mui/material';
import {useNavigate} from "react-router-dom";
import masterCard from "../pictures/mastercard.png";
import visa from "../pictures/visa.svg";
import pay from "../pictures/pay.png";
import orange from "../pictures/orange.jpeg";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
const Cart = () => {
    const navigate = useNavigate();

    return (
        <>
            <StyledWhiteBody>
                <StyledFlexDivCart>
                    <StyledFlexDivWish>
                        <StyledTypo variant="h4">Твојата кошничка</StyledTypo>
                        <StyledDivider orientation={"vertical"}/>
                        <Stack spacing={3}
                               alignItems="center"
                               justifyContent="center">
                            <StyledProductsGrid>
                                <Grid container spacing={2} direction="row">
                                    <Grid item>
                                        <ButtonBase sx={{width: 64, height: 64}}>
                                            <img
                                                src={orange}
                                                alt="Orange"
                                                style={{width: '80%', height: '80%'}}/>
                                        </ButtonBase>

                                    </Grid>
                                    <Grid item xs={12} sm container alignItems={'center'}>
                                        <Grid item xs container direction="column" spacing={1}>
                                            <Grid item xs>
                                                <Typography gutterBottom variant="subtitle1" component="div">
                                                    Портокал 1кг.
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Кам-Маркет-Козле
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid item sm container alignItems={'center'}  >
                                        <Typography align={"left"} variant="subtitle1"  >
                                            1
                                        </Typography>
                                        <Grid item xs container direction="column" alignItems="center" spacing={0}>
                                            <StyledButton><ArrowDropUpIcon/></StyledButton>
                                            <StyledButton><ArrowDropDownIcon/></StyledButton>
                                        </Grid>
                                        <Typography sx={{paddingRight:"10px"}}>140 ден</Typography>
                                        <DeleteOutlinedIcon />
                                    </Grid>
                                </Grid>
                            </StyledProductsGrid>

                        </Stack>
                    </StyledFlexDivWish>
                    <StyledFlexDivWish>
                        <StyledProductsBox>
                            <StyledCardDiv>
                                <StyledTypo
                                    sx={{marginLeft: '25px', marginTop: '10px'}}
                                >Картичка</StyledTypo>
                                <StyledTypo
                                    sx={{marginLeft: '25px', fontWeight: 'normal'}}
                                >Избереte вид на картичка / наплата во лице</StyledTypo>
                                <Stack direction="row" spacing={2}
                                       alignItems="center"
                                       justifyContent="center">
                                    <Button><img src={masterCard} alt={"masterCard"}/></Button>
                                    <Button><img src={visa} alt={"visa"}/></Button>
                                    <Button><img src={pay} alt={"pay"}/></Button>
                                </Stack>
                                <StyledTypo
                                    sx={{marginLeft: '25px', marginTop: '10px'}}
                                >Име на картичка</StyledTypo>
                                <StyledCardField
                                    sx={{marginLeft: '35px'}}
                                    required
                                    id="cardName"
                                    label="Card Name"
                                    name="cardName"
                                    size='small'
                                />

                                <StyledTypo
                                    sx={{marginLeft: '25px', marginTop: '10px'}}>
                                    Број на картичка
                                </StyledTypo>
                                <StyledCardField
                                    sx={{marginLeft: '35px'}}
                                    id="cardNumber"
                                    label="1111 2222 3333 4444"
                                    name="cardName"
                                    size='small'
                                />
                                <Stack direction="row" spacing={2}>
                                    <div>
                                        <StyledTypo
                                            sx={{marginLeft: '25px', marginTop: '10px'}}>
                                            Важност на картичката
                                        </StyledTypo>
                                        <StyledCardField
                                            sx={{marginLeft: '35px', width: '75%'}}
                                            id="cardDate"
                                            label="mm/yy"
                                            name="cardDate"
                                            size='small'
                                        />
                                    </div>
                                    <div>
                                        <StyledTypo
                                            sx={{marginLeft: '-10px', marginTop: "10px"}}>
                                            CVV
                                        </StyledTypo>
                                        <StyledCardField
                                            size='small'
                                            sx={{width: '71%'}}
                                            id="cardCCV"
                                            label="123"
                                            name="cardCCV"
                                        />
                                    </div>

                                </Stack>
                                <Divider variant="middle" sx={{paddingTop: '10px'}}/>
                                <Stack direction="row" spacing={2} sx={{marginLeft: '35px', marginTop: '30px'}}>
                                    <StyledCardField
                                        sx={{marginLeft: '35px', width: '50%'}}
                                        id="discount"
                                        label="Код за попуст"
                                        name="discount"
                                        // size='small'

                                    />
                                    <StyledTypo>Износ: </StyledTypo>
                                    <StyledTypo>123 ден.</StyledTypo>
                                </Stack>

                                <StyledTypo
                                    sx={{marginLeft: '25px', marginTop: '10px'}}>
                                    Време за подигнување нарачка
                                </StyledTypo>
                                <div>
                                    <Stack direction="row" spacing={2} sx={{marginLeft: '35px'}}>
                                        <StyledCardField
                                            sx={{width: '25%'}}
                                            id="Date"
                                            label="датум"
                                            name="Date"
                                            size='small'
                                        />
                                        <StyledCardField
                                            sx={{width: '25%'}}
                                            id="Time"
                                            label="Време"
                                            name="Time"
                                            size='small'
                                        />
                                        <StyledAuthButton

                                            variant="contained"
                                            sx={{mt: 1, mb: 1}}>
                                            Потврди наплата
                                            <NavigateNextIcon/>
                                        </StyledAuthButton>
                                    </Stack>
                                </div>


                            </StyledCardDiv>
                        </StyledProductsBox>
                    </StyledFlexDivWish>

                </StyledFlexDivCart>
            </StyledWhiteBody>
        </>
    )
}

export default Cart