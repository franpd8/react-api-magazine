import logo from "../../assets/logo.webp";
import search from "../../assets/search.png"
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="nav">
        <Link to="/articles"><img src={logo} className="logo" /></Link>
        
         <Link to="/submit">Submit</Link>
      
      </div>
      {/* <div className="search">
        <img src={search} className="searchIcon" />
      </div> */}
    </div>
  );
};

export default Header;
