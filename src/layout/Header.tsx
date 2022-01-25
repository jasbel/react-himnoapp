import logo from '../logo.svg'
import { responsive } from '../utils/responsive';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} className="" alt="logo"  width={responsive(56, 20)}/>
    </header>
  );
};

export default Header;
