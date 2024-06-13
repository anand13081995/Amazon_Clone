import { Link } from 'react-router-dom';
import amzLogo from "../assets/amzLogo.png";
import { Search } from "@mui/icons-material";
import { ShoppingCart } from '@mui/icons-material';
import "../Css/Nav.css";
import { useStateValue } from '../Pages/StateProvider';
import Dropdown from './Dropdown';

function Nav() {

  const [{basket}] = useStateValue()


  return (
    <div className="navBar">
      <Link to="/" className="logo-link">
        <img className="logo" src={amzLogo} alt="logo" />
      </Link>

      <div className="navSearch">
        <Dropdown/>
        <input type="text" className="searchBox" />
        <Search className="searchIcon" />
      </div>

      <div className="navlinks">
        <Link to="/login">
          <div className="hello">
            <span className='navs1'>Hello, sign in</span>
            <span className='navs2'>Account & Lists</span>
          </div>
        </Link>

        <Link to="/login">
          <div className="hello">
            <span className='navs1'>Returns</span>
            <span className='navs2'>&Orders</span>
          </div>
        </Link>

        <Link to="/checkout">
          <div className="navCartBox">
            <ShoppingCart />
            <span className='navs2 countCart'>{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Nav;