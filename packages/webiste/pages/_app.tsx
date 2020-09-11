import * as React from 'react';

import Prism from '@theme-ui/prism';
import { AppProps } from 'next/app';
import NextLink from 'next/link';
import { ThemeProvider } from 'theme-ui';

import Layout from '../components/Layout';

import theme from '../theme';

const components = {
  a: ({ href, className, children }: any) => {
    return (
      <NextLink href={href} passHref>
        <a target="_blank" rel="noopener noreferrer" className={className}>
          {children}
        </a>
      </NextLink>
    );
  },
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
