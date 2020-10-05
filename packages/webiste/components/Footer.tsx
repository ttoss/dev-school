/** @jsx jsx */
import { jsx } from 'theme-ui';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer
      sx={{
        backgroundColor: 'background',
        height: '100px',
        textAlign: 'center',
        fontSize: 1,
      }}
    >
      <hr
        sx={{
          width: '95%',
          height: '0.8px',
          borderWidth: 0,
          color: 'muted',
          backgroundColor: 'muted',
        }}
      />
      Apoiado por &nbsp;
      <a
        href="https://www.triangulostecnologia.com"
        target="_blank"
        rel="noreferrer"
      >
        Triângulos Tecnologia
      </a>
      &nbsp; e &nbsp;
      <Link href="/contribuidores">
        <a>pessoas querendo aprender e ensinar.</a>
      </Link>
    </footer>
  );
};

export default Footer;
