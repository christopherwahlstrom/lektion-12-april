import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <Link to="/">Hem</Link>
            <Link to="/om">Om</Link>
        </nav>
    )
}

export default Navbar;