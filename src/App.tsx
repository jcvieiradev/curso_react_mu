import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { DrawerProvider } from './shared/contexts';
import { AppRoutes } from './routes';
import { ThemeProvider } from '@emotion/react';
import { LighTheme } from './shared/themes';
import { MenuLateral } from './shared/components';

export const App = () => {
    return (
        <ThemeProvider theme={LighTheme}>
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


