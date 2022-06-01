import { Button } from '@mui/material';
import { Routes, Route, Navigate} from 'react-router-dom';


export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/dashboard" element={<Button variant='text' color='primary'>Test</Button>} />

            <Route path="*" element={<Navigate to="/dashboard"/>}/>
        </Routes>
    );
}