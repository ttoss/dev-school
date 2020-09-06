import * as React from 'react';

import Prism from '@theme-ui/prism';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'theme-ui';

import Layout from '../components/Layout';

import theme from '../theme';

const components = {
  pre: ({ children }: any) => <>{children}</>,
  code: Prism,
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider {...{ theme, components }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
