/** @jsx jsx */
import { Container, jsx } from 'theme-ui';

import Footer from './Footer';
import Header from './Header';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Container sx={{ padding: 4, maxWidth: '50em' }}>{children}</Container>
      <Footer />
    </>
  );
};

export default Layout;
