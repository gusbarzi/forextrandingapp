import { Button } from "@mui/material";
import { Link } from 'react-router-dom';

export const Modal = () => {
    return (
        
        <div className="container__box ">
                <div className="portifolio">
                    <nav>
                        <p className="nav__logo">GPB 0,0000</p>
                        <ul className="nav__list">
                            <li>
                                <Link to="/deposit">
                                    <Button variant="contained" color="success" classes={{ root: 'button' }}>Deposit</Button>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
    );
}

export default Modal;