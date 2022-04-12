import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav>
            <Link to="/">Hem</Link>
            <Link to="/om">Om</Link>
            <Link to="/produkter">Produkter</Link>
        </nav>
    )
}

export default Navbar;