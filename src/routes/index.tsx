import { Button } from '@mui/material';
import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/pagina-inicial' element={<Button>Botão</Button>} />

            <Route path='*' element={<Navigate to='/pagina-inicial' />} />
        </Routes>
    );
};
