import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './signin.css';
import { useContext, useState } from 'react';
import api from '../../shared/services/Api';
import { UserContext } from '../../context/user';
import { useNavigate } from 'react-router-dom';
import Header from '../Homepage/Header/Header';

const theme = createTheme();

export default function SignIn() {
    let navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { login, setLogin, setUsuario } = useContext(UserContext);

    async function handleSubmit(e: any) {
        e.preventDefault();
        try {
            const userData = await api.post('/users/signin', {
                email,
                password
            })
            localStorage.setItem('user_login', JSON.stringify(userData.data))
            setLogin(true);
            navigate('/');
            setUsuario(userData.data)               
        } catch (err) {
            // console.log('Falha')
        }
    }

    return (
        <>
            <Header home={true} />
            <ThemeProvider theme={theme}>
                <Container classes={{ root: 'cont' }} component="main" maxWidth="xs">
                    <Box
                        sx={{
                            marginTop: 15,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box component="form" noValidate sx={{ mt: 1 }}>

                            <TextField
                                autoFocus
                                required
                                fullWidth
                                margin="normal"
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}

                            />


                            <TextField
                                required
                                fullWidth
                                margin="normal"
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />

                            <Button
                                onClick={handleSubmit}
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>

                            <Grid container>
                                <Grid item>
                                    <Link href="/register" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>

                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </>
    );
}