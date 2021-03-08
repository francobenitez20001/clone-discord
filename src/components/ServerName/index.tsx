import React from 'react';
import {Container,Title,ExpandIcon} from './styles';
  
export interface ServerNameProps {
    
}
 
const ServerName: React.SFC<ServerNameProps> = () => {
    return (
        <Container>
            <Title>Servidor de Raiz</Title>
            <ExpandIcon/>
        </Container>
    )
}
 
export default ServerName;