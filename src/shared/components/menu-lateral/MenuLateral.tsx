import React from 'react';
import { Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import Icon from '@mui/material/Icon';
import { Box } from '@mui/system';
import { useDrawerContext } from '../../contexts';
import { useNavigate } from 'react-router-dom';

interface IListItemLinkProps{
    to: string;
    icon: string;
    label: string;
    onClick: (() => void) | undefined;
}

const ListItemLink: React.FC<IListItemLinkProps> = ({ to, icon, label, onClick }) =>{
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(to);
        onClick?.();
    };

    return (
        <ListItemButton onClick={handleClick}>
            <ListItemIcon>
                <Icon>{icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={label}/>
        </ListItemButton>
    );

};

interface IAppThemeProviderProps {
    children: React.ReactNode
}
export const MenuLateral: React.FC<IAppThemeProviderProps> = ({ children }) => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));

    const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();

    return (
        <>
            <Drawer open={isDrawerOpen} variant={smDown ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen}>
                <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">
                    <Box width="100%" height={theme.spacing(20)}>


                    </Box>
                    <Divider />

                    <Box flex={1}>
                        <List component="nav">
                            <ListItemLink
                                icon='home'
                                to='/pagina-inicial'
                                label='Página 1'
                                onClick={smDown ? toggleDrawerOpen : undefined}
                            />
                            <ListItemLink
                                icon='star'
                                to='/pagina-inicial'
                                label='Página 2'
                                onClick={smDown ? toggleDrawerOpen : undefined}
                            />
                        </List>

            
                    </Box>
                </Box>
            </Drawer>
            <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
                {children}
            </Box>

        </>
    );
};