import Box, { BoxProps } from '@mui/material/Box';
import { Container, Typography, TextField, Button } from "@mui/material"
import { useEffect, useState } from 'react'
import axios from 'axios';
import './trading.css';

export const Trading = () => {
    const [dolar, setDolar] = useState(0);

    useEffect(() => {
        const getData = async () => {
            await axios
                .get("https://economia.awesomeapi.com.br/last/GBP-USD")
                .then((response) => {
                    console.log(Number(response.data.GBPUSD.high));
                    setDolar(response.data.GBPUSD.high);
                })
                .catch((error) => {
                    console.log(error)
                });
        };
        getData();
    }, []);


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

                        <div className="box__container">
                            <h1 className="div__h1">
                                Balance
                            </h1>
                            <h1 className="div__h1">
                                £0,00000
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
                        <Typography>GPB(US$)</Typography>
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
                        />
                        <Typography>GBP(£)/USD(US$)</Typography>
                        <TextField
                            size="small"
                            disabled
                            id="outlined-basic"
                            label="Total"
                            variant="outlined"
                            sx={{
                                width: 350,
                            }}
                            margin="normal"
                        />
                        <Button
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
    )
}

export default Trading;