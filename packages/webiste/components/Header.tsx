/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Icon } from '@iconify/react';
import codeOutlined from '@iconify/icons-ant-design/code-outlined';

const DevIcon = () => {
  return (
    <div
      sx={{
        display: 'contents',
      }}
    >
      <Icon
        icon={codeOutlined}
        width="50%"
        align="left"
        sx={{
          color: 'text',
          margin: '1.3em 6em 0 2em',
        }}
      />
    </div>
  );
};

const Header = () => {
  return (
    <header
      sx={{
        backgroundColor: 'background',
        height: '90px',
        width: '100%',
        display: 'flex',
      }}
    >
      <DevIcon />
    </header>
  );
};

export default Header;
