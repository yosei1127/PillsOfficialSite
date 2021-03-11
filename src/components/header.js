import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <Link to="/" className="icon">Pills</Link>
                    <div className="warapper">
                        <div className="navi">
                            <li><Link to="/about">ABOUT</Link></li>
                            <li><Link to="/disco">DISCOGRAPHY</Link></li>
                            <li><Link to="/sns">SNS</Link></li>
                            <li><Link to="/contact">CONTACT</Link></li>
                        </div>
                    </div>
                </ul>
            </nav>
        </header>
    )
}

export default Header
