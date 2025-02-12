import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: 'Playfair Display, serif',
    body: 'Lato, sans-serif',
  },
  colors: {
    brand: {
      primary: '#004225',
      accent: '#FFFFFF',
      background: '#F5F5F5',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'brand.background',
      },
    },
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'brand',
      },
      variants: {
        solid: {
          bg: 'brand.primary',
          color: 'white',
          _hover: {
            bg: '#003319',
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          },
        },
        outline: {
          borderColor: 'brand.primary',
          color: 'brand.primary',
          _hover: {
            bg: 'rgba(0, 66, 37, 0.1)',
          },
        },
      },
    },
  },
})

export default theme 