import logo from "../assets/logo.jpg";
import { CiSearch } from "react-icons/ci";
import { IoMdPerson } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="logoContainer">
        <Link to="/">
          <img src={logo} alt="eyes-of-bunnny-logo" className="logo" />
        </Link>
      </div>
      <div className="iconContainer">
        <CiSearch className="icon" />
        <input
          type="text"
          //  placeholder="search.."
          style={{
            width: "150px",
            height: "25px",
            marginLeft: "5px",
            border: "0px",
            borderBottom: "1px solid #ccc",
            outline: "none", //disable black outline when entering input
          }}
        />
        <Link to="/login">
          <IoMdPerson className="icon" />
        </Link>
        <Link to="/cart">
          <FaShoppingCart className="icon" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
