import { Link } from 'react-router-dom';

function Footer(){

    return(
    <footer>
        <p>Footer</p>
        <section>
            <Link to="/about">About us</Link>
            <Link to="/return-exchange">Return & Exchange</Link>
            <Link to="/shipping-policy">Shipping Policy</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
        </section>
    </footer>
    )
}

export default Footer;