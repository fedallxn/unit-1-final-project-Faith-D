import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <h1>Flourish: Insert Logo Here</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/collection">Collection</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
        </header>
    )
}

export default Header;