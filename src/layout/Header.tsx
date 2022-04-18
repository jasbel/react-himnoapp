import { Container } from '@mui/material';
import logo from '../logo.svg'
import { responsive } from '../utils/responsive';

const Header = () => {
  return (
    <header className="header bg-blue-800">
      <Container>
        <img src={logo} className="" alt="logo"  width={responsive(56, 20)}/>
      </Container>
    </header>
  );
};

export default Header;
