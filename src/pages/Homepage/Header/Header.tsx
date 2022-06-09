import { Button } from '@mui/material';
import { Link } from "react-router-dom";
import Userbutton from '../../../shared/components/Userbutton';
import './header.css';



const Header = ({ home }: any) => {
    return (
        <div>
            <header className="container">
                <nav className="sign__in">
                    <a className="nav__logo" href={"/"}>Forex Tranding App</a>

                    {
                        home === true && <ul className="nav__list">
                            <li>
                                <Link to="/signin">
                                    <Button className="nav__button" color="primary">Sign in</Button>
                                </Link>
                            </li>
                            <li>
                                <Link to="/register">
                                    <Button className="nav__button" color="primary">Create an account</Button>
                                </Link>
                            </li>
                        </ul>
                    }

                    {
                        home === false && <ul className="nav__list">
                            <li>
                                <Link to="/portifolio">
                                    <Button classes={{root: 'button'}} color="primary">Wallet</Button>
                                </Link>
                            </li>
                            <li>
                                <Link to="/trading">
                                    <Button classes={{root: 'button'}} color="primary">Forex Trade</Button>
                                </Link>
                            </li>
                            <li>
                                <Link to="/transactions">
                                    <Button classes={{root: 'button'}} color="primary">Transactions History</Button>
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <Userbutton />
                                </Link>
                            </li>
                        </ul>
                    }
                </nav>
            </header>
        </div>
    )

}

export default Header;