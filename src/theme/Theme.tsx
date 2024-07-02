import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2', // Your primary color
        },
        secondary: {
            main: '#dc004e', // Your secondary color
        },
        background: {
            default: 'linear-gradient(0deg, #F5EEAD 6%, #FCFCF7 100%)',
            paper: '#ffffff', // Background color for paper elements
        },
        text: {
            primary: '#000000', // Primary font color
            secondary: '#333333', // Secondary font color
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                html: {
                    height: '100%',
                    margin: 0,
                    background: 'linear-gradient(0deg, #F5EEAD 6%, #FCFCF7 100%)',
                },
                body: {
                    height: '100%',
                    margin: 0,
                    background: 'linear-gradient(0deg, #F5EEAD 6%, #FCFCF7 100%)',
                },
                '#root': {
                    height: '100%',
                },
            },
        },

    },
});

export default theme;
