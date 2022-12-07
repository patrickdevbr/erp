import { ChakraProvider } from '@chakra-ui/react';

import Layout from '../components/Layout';
import theme from '../theme/theme';


import type { AppProps } from 'next/app'
function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
