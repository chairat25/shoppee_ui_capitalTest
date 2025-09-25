import { createTheme } from '@mui/material/styles'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const theme = createTheme({
    palette: {
        primary: { main: '#ee4d2d' }, // Shopee-ish orange
        secondary: { main: '#fbc02d' },
        background: {
            default: '#fafafa',
        },
    },
    shape: { borderRadius: 12 },
    typography: {
        fontFamily: ['Inter', 'Prompt', 'Noto Sans Thai', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
    },
    components: {
        MuiContainer: {
            defaultProps: { maxWidth: 'lg' },
        },
        MuiCard: {
            styleOverrides: {
                root: { boxShadow: '0 2px 10px rgba(0,0,0,0.05)' },
            },
        },
    },
})


