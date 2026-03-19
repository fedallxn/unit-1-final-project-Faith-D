import { Routes, Route, Link } from 'react-router-dom'
import HomePage from './HomePage'
import CollectionPage from './CollectionPage'
import AboutPage from './AboutPage'
import ContactPage from './ContactPage'

function Header() {
    return (
        <>
        <h1>Flourish: Insert Logo Here</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/collection">Collection</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/collection" element={<CollectionPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
        </Routes>
        </>
    )
}

export default Header;