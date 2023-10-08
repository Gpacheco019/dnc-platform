import { AppProps } from 'next/app';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';

import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Escola DNC | Cursos de Tecnologia e Marketing</title>
          <link rel="shorcut icon" href="/img/bg.png" />
          <link rel="apple-touch-icon" href="/img/bg.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta
            name="description"
            content="Escola DNC | Cursos de Tecnologia e Marketing"
          />
        </Head>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
