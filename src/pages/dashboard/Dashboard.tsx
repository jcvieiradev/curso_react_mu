import { FerramentasDeDetalhe } from '../../shared/components';
import { LayoutBaseDePagina } from '../../shared/layouts';
import React from 'react';

export const Dashboard = () => {

    return (
        <LayoutBaseDePagina 
            titulo='Página inicial'
            barraDeFerramentas={(
                <FerramentasDeDetalhe 
                    mostrarBotaoSalvarEFechar
                   
                />                
            )}>
            Testando
   
        </LayoutBaseDePagina>
    );
};