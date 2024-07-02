
import {Button, InputBase, styled} from "@mui/material";
import {Container} from "@mui/material";
import { Toolbar } from '@mui/material';
import theme from "../theme/Theme";

export const StyledHomePage = styled(Container)({
    backgroundColor: "darkslategray",
    width: '100%',
    height: '100%',


});

export const StyledHeader = styled(Toolbar)({
   backgroundColor: theme.palette.background.default,
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