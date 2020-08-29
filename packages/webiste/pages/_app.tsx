import * as React from 'react';

import { AppProps } from 'next/app';
import { ThemeProvider } from 'theme-ui';

import theme from '../theme';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
