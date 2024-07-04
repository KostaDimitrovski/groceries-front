import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#dc004e',
        },
        background: {
            default: 'linear-gradient(0deg, #FCFCF7 6%, #F5EEAD 100%)',
            paper: '#ffffff',

        },
        text: {
            primary: '#000000',
            secondary: '#2F3538',
        },
    },
    // components: {
    //     MuiCssBaseline: {
    //         styleOverrides: {
    //             // html: {
    //             //     height: '100%',
    //             //     margin: 0,
    //             //     background: 'linear-gradient(0deg, #F5EEAD 6%, #FCFCF7 100%)',
    //             // },
    //             body: {
    //                 height: '100%',
    //                 margin: 0,
    //                 background: 'linear-gradient(0deg, #F5EEAD 6%, #FCFCF7 100%)',
    //             },
    //             '#root': {
    //                 height: '100%',
    //             },
    //         },
    //     },
    //
    // },
});

export default theme;
