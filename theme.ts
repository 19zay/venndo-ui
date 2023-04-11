import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const colors = {
    brand: {
      50: "#eceff1",
      // Add more colors here
    },
    dark: {
      50: "#1a202c",
      // Add more colors here
    },
  };

const theme = extendTheme({ config, colors })

export default theme