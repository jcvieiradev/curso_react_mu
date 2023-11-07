import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { DrawerProvider } from './shared/contexts';
import { AppRoutes } from './routes';
import { ThemeProvider } from '@emotion/react';
import { MenuLateral } from './shared/components';
import { LightTheme } from './shared/themes/Ligth';

export const App = () => {
    return (
        <ThemeProvider theme={LightTheme}>
            <DrawerProvider>
                <BrowserRouter>
                    <MenuLateral>
                        <AppRoutes />
                    </MenuLateral>                    
                </BrowserRouter>
            </DrawerProvider>
        </ThemeProvider>


    );
};


