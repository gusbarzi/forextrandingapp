import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Vinput, { InputGBP } from '../../shared/components/InputGBP';
import { Container, FormControl, Grid, InputAdornment, InputLabel, OutlinedInput, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';
import InputUSD from '../../shared/components/InputUSD';

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

export const Portifolio = () => {
    const [balance, setBalance] = useState(0);
    const [gbpBalance, setBalanceGbp]: any = useState('');

    //Modal open
    const [openGbp, setOpengbp] = useState(false);
    const [openUsd, setOpenusd] = useState(false)

    const handleOpengbp = () => setOpengbp(true);
    const handleOpenusd = () => setOpenusd(true);

    const handleClosegbp = () => setOpengbp(false);
    const handleCloseusd = () => setOpenusd(false);

    const getDados = () => {
        axios.get('http://localhost:3001/users/62a1589fca7aec93e1fe47d0')
            .then((response) => {
                setBalance(response.data.balance)
                console.log(response.data)
            }).catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getDados()
    }, [balance])

    const deposit = () => {
        const balanceAdd = balance + Number(gbpBalance)
        axios.patch('http://localhost:3001/users/62a1589fca7aec93e1fe47d0', { balance: balanceAdd }).then(() => {
            getDados()
            setBalanceGbp('')
        }).catch((error) => {
            console.log(error)
        })
    }


    return (

        <Container maxWidth="md" >
            <Box sx={{
                width: "100%",
                height: 890,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        width: 500,
                        height: 600,
                        backgroundColor: '#e9e9e9',
                        p: 2,
                        m: 1,
                        borderRadius: 5,
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <Typography
                            sx={{
                                height: 150
                            }}

                            variant="h3"
                        >
                            Balance</Typography>
                        <Grid container rowSpacing={4} columnSpacing={{ xs: 2, sm: 3, md: 10 }}>

                            <Grid item xs={8}>
                                <Typography
                                    sx={{
                                        m: 1,
                                    }}
                                    variant="h6"
                                    gutterBottom
                                    component="div"
                                >
                                    GBP: {balance}
                                </Typography>
                            </Grid>

                            <Grid item xs={4}>
                                <Link to="/portifolio">
                                    <Button onClick={handleOpengbp} variant="contained" color="success" classes={{ root: 'button' }}>Deposit</Button>
                                </Link>
                            </Grid>

                            <Grid item xs={8}>
                                <Typography
                                    sx={{
                                        m: 1,
                                    }}
                                    variant="h6"
                                    gutterBottom
                                    component="div"
                                >
                                    US$ 0,00
                                </Typography>
                            </Grid>

                            <Grid item xs={4}>
                                <Link to="/portifolio">
                                    <Button onClick={handleOpenusd} variant="contained" color="success" classes={{ root: 'button' }}>Deposit</Button>
                                </Link>
                            </Grid>

                        </Grid>
                        <div>
                            <Modal
                                open={openGbp}
                                onClose={handleClosegbp}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <FormControl fullWidth >
                                        <InputLabel color="secondary" htmlFor="outlined-adornment-amount">Amount</InputLabel>

                                        <OutlinedInput
                                            value={gbpBalance}
                                            onChange={(e) => setBalanceGbp(e.target.value)}
                                            color="secondary"
                                            id="outlined-adornment-amount"
                                            startAdornment={<InputAdornment position="start">£</InputAdornment>}
                                            label="Amount"
                                        />
                                        <Button onClick={() => deposit()} color="success">Deposit</Button>
                                    </FormControl>
                                </Box>
                            </Modal>
                        </div>
                        <div>
                            <Modal
                                open={openUsd}
                                onClose={handleCloseusd}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <InputUSD />
                                    <Button color="success">Deposit</Button>
                                </Box>
                            </Modal>
                        </div>
                    </Box>
                </Box>
            </Box>
        </Container>

    );
}

export default Portifolio;