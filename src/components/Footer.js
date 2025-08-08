import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <p>©2025 Eyes of Bunny All Rights Reserved</p>
      <section>
        <Link to="/about" className="footerLink">
          About Us
        </Link>
        <Link to="/return-exchange" className="footerLink">
          Return & Exchange
        </Link>
        <Link to="/shipping-policy" className="footerLink">
          Shipping Policy
        </Link>
        <Link to="/privacy-policy" className="footerLink">
          Privacy Policy
        </Link>
      </section>
    </footer>
  );
}

export default Footer;
