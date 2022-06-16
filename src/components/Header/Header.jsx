import logo from "../../assets/logo.webp";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="nav">
        <Link to="/">
          <img src={logo} className="logo" />
        </Link>
         <Link to="/submit">Submit</Link>
      </div>
    </div>
  );
};

export default Header;
