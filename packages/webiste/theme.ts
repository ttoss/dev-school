import prismTheme from '@theme-ui/prism/presets/night-owl.json';
import { toTheme } from '@theme-ui/typography';
import { merge } from 'theme-ui';

const typography = toTheme({ baseLineHeight: 1.8 });

const theme = {
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: 'Menlo, monospace',
  },
  colors: {
    text: '#24292e',
    background: '#fff',
    primary: '#000',
  },
  styles: {
    h1: {
      textAlign: ['center'],
    },
    pre: {
      ...prismTheme,
    },
  },
};

export default merge(typography, theme);
