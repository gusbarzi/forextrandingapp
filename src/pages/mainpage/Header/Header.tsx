import { Button } from '@mui/material';
import './header.css';

const Header = () => {
    return (
        <header className="container">
            <nav className="sign__in">
                <a className="nav__logo" href="/dashboard">Forex Tranding App</a>

                <ul className="nav__list">
                    <li><Button className="nav__button" color="primary">Sign in</Button></li>
                    <li><Button className="nav__button" color="primary">Create an account</Button></li>
                </ul>
            </nav>
        </header>
    )

}

export default Header;