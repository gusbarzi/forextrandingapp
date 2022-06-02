import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Vinput from '../../shared/components/Vinput';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderradius: '10px',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export const DepositModal = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (

        <div className="container__box ">
            <div className="portifolio">
                <h2>Balance</h2>
                <nav>
                    <p className="nav__logo">GPB 0,0000</p>
                    <ul className="nav__list">
                        <li>
                            <Link to="/portifolio">
                                <Button onClick={handleOpen} variant="contained" color="success" classes={{ root: 'button' }}>Deposit</Button>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Vinput />
                        <Button color="success">Deposit</Button>
                    </Box>
                </Modal>
            </div>
        </div>
    );
}

export default Modal;