import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors:{

    },
    fonts:{
        heading: `'Ubuntu', sans-serif`,
        body: `'Ubuntu', sans-serif`,
    },
    styles: {
        global: {
            body: {
                bg: 'gray.800',
                color: 'gray.50'
            }
        }
    }
})