import {
    StyledAuthButton,
    StyledCardDiv,
    StyledCardField, StyledFlexDivWish,
    StyledProductsBox,
    StyledTypo
} from "../styled/StyledComponents";
import {Button, Divider, Stack} from "@mui/material";
import masterCard from "../pictures/mastercard.png";
import visa from "../pictures/visa.svg";
import pay from "../pictures/pay.png";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../store/root-reducer";

export const PayCard = () => {

    const cartItems = useSelector((state: RootState) => state.cart.cartItems);

    const calculateDiscountedTotal = () => {
        return cartItems.reduce((total, item) => {
            const discountPercentage = parseFloat(item.discount);
            const discountedPrice = item.price * (1 - discountPercentage / 100);
            return total + discountedPrice * item.quantity;
        }, 0);
    };

    const discountedTotal = calculateDiscountedTotal();

    return (
        <>
            <StyledFlexDivWish>
                <StyledProductsBox>
                    <StyledCardDiv>
                        <StyledTypo sx={{marginLeft: '25px', marginTop: '10px'}}>Картичка</StyledTypo>
                        <StyledTypo sx={{marginLeft: '25px', fontWeight: 'normal'}}>
                            Избереte вид на картичка / наплата во лице
                        </StyledTypo>
                        <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
                            <Button><img src={masterCard} alt={"masterCard"}/></Button>
                            <Button><img src={visa} alt={"visa"}/></Button>
                            <Button><img src={pay} alt={"pay"}/></Button>
                        </Stack>
                        <StyledTypo sx={{marginLeft: '25px', marginTop: '10px'}}>Име на картичка</StyledTypo>
                        <StyledCardField
                            sx={{marginLeft: '35px'}}
                            required
                            id="cardName"
                            label="Card Name"
                            name="cardName"
                            size='small'
                        />
                        <StyledTypo sx={{marginLeft: '25px', marginTop: '10px'}}>Број на картичка</StyledTypo>
                        <StyledCardField
                            sx={{marginLeft: '35px'}}
                            id="cardNumber"
                            label="1111 2222 3333 4444"
                            name="cardName"
                            size='small'
                        />
                        <Stack direction="row" spacing={2}>
                            <div>
                                <StyledTypo sx={{marginLeft: '25px', marginTop: '10px'}}>Важност на
                                    картичката</StyledTypo>
                                <StyledCardField
                                    sx={{marginLeft: '35px', width: '75%'}}
                                    id="cardDate"
                                    label="mm/yy"
                                    name="cardDate"
                                    size='small'
                                />
                            </div>
                            <div>
                                <StyledTypo sx={{marginLeft: '-10px', marginTop: "10px"}}>CVV</StyledTypo>
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
                            />
                            <StyledTypo>Износ: </StyledTypo>
                            <StyledTypo>{discountedTotal.toFixed(0)} ден.</StyledTypo>
                        </Stack>
                        <StyledTypo sx={{marginLeft: '25px', marginTop: '10px'}}>Време за подигнување
                            нарачка</StyledTypo>
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
                                <StyledAuthButton variant="contained" sx={{mt: 1, mb: 1}}>
                                    Потврди наплата
                                    <NavigateNextIcon/>
                                </StyledAuthButton>
                            </Stack>
                        </div>
                    </StyledCardDiv>
                </StyledProductsBox>
            </StyledFlexDivWish>
        </>
    )
}