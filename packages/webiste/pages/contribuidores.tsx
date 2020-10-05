/** @jsx jsx */
import { jsx, Styled, Button } from 'theme-ui';
import Link from 'next/link';

const Contributors = () => {
  return (
    <>
      <Styled.h1>Contribuidores</Styled.h1>
      <div
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Link href="/">
          <Button sx={{ variant: 'button.primary' }}>
            <a sx={{ textDecoration: 'none' }}>Voltar</a>
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Contributors;
