import prismTheme from '@theme-ui/prism/presets/night-owl.json';
import { toTheme } from '@theme-ui/typography';
import { merge } from 'theme-ui';

const typography = toTheme({ baseLineHeight: 1.8 });

const theme = {
  breakpoints: ['40em', '52em', '64em'],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  fonts: {
    body: 'Asap, sans-serif',
    heading: 'Overpass, sans-serif',
    monospace: '"Overpass Mono", monospace',
  },
  colors: {
    text: '#4c4c4c',
    background: '#f7f7f7',
    primary: '#4780a8',
    secondary: '#394856',
    accent: '#009df7',
    highlight: '#ffffff',
    muted: '#d0d2d3',
  },
  styles: {
    h1: {
      textAlign: ['center'],
      fontFamily: 'heading',
      fontWeight: 'heading',
      fontSize: [5, 6, 7],
    },
    inlineCode: {
      paddingX: 1,
      ...prismTheme,
    },
    pre: {
      ...prismTheme,
    },
  },
  button: {
    primary: {
      color: 'text',
      bg: 'Transparent',
      border: '2px solid #4c4c4c',
      textAlign: 'center',
      transition: 'all 0.4s',
      verticalAlign: 'middle',
      fontSize: 2,
      padding: '0.5em 1.5em 0.5em 1.5em',
      cursor: 'pointer',
      overflow: 'hidden',
      outline: 'none',
      '&:hover': {
        color: 'background',
        bg: 'text',
      },
    },
  },
};

export default merge(typography, theme);
