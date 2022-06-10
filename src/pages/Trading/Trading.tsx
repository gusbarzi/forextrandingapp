import Box, { BoxProps } from '@mui/material/Box';
import { Container, Typography, TextField, Button } from "@mui/material"
import { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import './trading.css';
import { DataObject } from '@mui/icons-material';
import Header from '../Homepage/Header/Header';
import { UserContext } from '../../context/user';

export const Trading = () => {
    const { usuario, setUsuario } = useContext(UserContext);
    const [dolar, setDolar] = useState(0);
    const [libra, setLibra]: any = useState(0);
    const [total, setTotal]: any = useState();
    const [depositValue, setValue] = useState("");



    useEffect(() => {
        const getData = async() => {
            const ws =  await new WebSocket('wss://stream.binance.com:9443/ws/gbpusdt@bookTicker');

            ws.onmessage = (event) => {
                const obj = JSON.parse(event.data);
                // console.log(obj.a)
                setDolar(obj.a)
            }
        };
        getData();
    }, []);

    const convert = () => {
        setTotal(dolar * libra);
    };

    const body = {
        userId: usuario._id,
        firstName: usuario.firstName,
        lastName: usuario.lastName,
        balance: usuario.balance,
        dateCreate: usuario.createDate,
    }

    const transaction = () => {
        axios.post(`http://localhost:3001/transaction`, body)
            .then((response) => {
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const trade = () => {
        const balanceAdd = total;
        axios.patch(`http://localhost:3001/users/${usuario._id}`, { balance: usuario.balance - libra, dolar: usuario.dolar + balanceAdd })
            .then((response) => {
                transaction()
                setUsuario(response.data)
            }).catch((error) => {
                // console.log(error);
            })
    }

    return (
        <>
            <Header home={false} />
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

                            <div className="box__container">
                                <h1 className="div__h1">
                                    GBP
                                </h1>
                                <h1 className="div__h1">
                                    £ {usuario?.balance}
                                </h1>
                                <h1 className="div__h1">
                                    Dolar
                                </h1>
                                <h1 className="div__h1">
                                    US$ {usuario?.dolar.toFixed(2)}
                                </h1>
                            </div>
                            <Typography>Dolar(US$)</Typography>
                            <TextField
                                size="small"
                                disabled
                                id="outlined-basic"
                                label={dolar}
                                variant="outlined"
                                sx={{
                                    width: 350,
                                }}
                                margin="normal"
                            />
                            <Typography>GPB(£)</Typography>
                            <TextField
                                color="secondary"
                                size="small"
                                id="outlined-basic"
                                label="Amount (£)"
                                variant="outlined"
                                sx={{
                                    width: 350,
                                }}
                                margin="normal"
                                onChange={(e) => setLibra(e.target.value)}
                                onKeyUp={() => convert()}
                            />
                            <Typography>GBP(£)/USD(US$)</Typography>
                            <TextField
                                size="small"
                                disabled
                                id="outlined-basic"
                                label={total}
                                variant="outlined"
                                sx={{
                                    width: 350,
                                }}
                                margin="normal"
                            />
                            <Button
                                onClick={() => trade()}
                                sx={{
                                    width: 350,
                                }}
                                variant="contained"
                                color="success"
                            >
                                Buy
                            </Button>
                        </Box>
                    </Box>
                </Box>

            </Container>
        </>
    )
}

export default Trading;