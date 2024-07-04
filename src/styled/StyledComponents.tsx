
import {Button, InputBase, styled} from "@mui/material";
import {Container} from "@mui/material";
import { Toolbar } from '@mui/material';
import theme from "../theme/Theme";

export const StyledWhiteBody = styled('body')({
    background: theme.palette.background.paper,
    height: '100%',

});
export const StyledBody = styled('body')({
    background: theme.palette.background.default,
    height: '1500px'
});

export const StyledHomePage = styled(Container)({
    backgroundColor: "darkslategray",
    width: '100%',
    height: '100%',
});

export const StyledHeader = styled(Toolbar)({
   background: '#F5EEAD',
   display: 'flex',
    justifyContent: 'space-between',
});

export const StyledButton = styled(Button)({
    color: theme.palette.text.primary,
    fontWeight: "bold",
    textTransform: "none"
})
export const StyledLeftDiv = styled('div')({
    display: 'flex',
    width: '55%',
    justifyContent: 'space-evenly',
    paddingRight: '100px'
})
export const StyledRightDiv = styled('div')({
    display: 'flex',

})
export const SearchDiv = styled('div')({
    borderRadius: 25,
    border: '1px grey solid',
    display: 'flex',
    height: '35px',
    width: '500px',

})
export const SearchIconDiv = styled('div')({
    paddingRight:'8px',
    paddingLeft:'10px',
    paddingTop:'5px'
})
export const StyledSearchBar = styled(InputBase)({
    width: '450px'
})
export const StyledAuthButton = styled(Button)({
    background: theme.palette.text.secondary,
    fontWeight: "bold",
    textTransform: "none",
    borderRadius: 25,

})
export const GoogleButton = styled(Button)({
    background: "#BFDBEA",
    color: '#565859',
    borderRadius: 25,
    margin: '10 10 10 10',
    width: '100%',
    height: '100%',
    paddingRight: '20px',
});


export const StyledDivPicuture = styled('div')({
    display: 'flex',
   justifyContent: 'center',
     alignItems: 'center',
    padding: '10px 10px 50px 20px'
});

export const StyledLoginDiv = styled('div')({
    display: 'flex',
     width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0px 20px 20px 20px'
});
