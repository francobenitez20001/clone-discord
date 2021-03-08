import React from 'react';
import {Container,Title,HashtagIcon,Description,Separador} from './styles';
  
export interface ChannelInfoProps {
    
}
 
const ChannelInfo: React.SFC<ChannelInfoProps> = () => {
    return (
        <Container>
            <HashtagIcon/>
            <Title>Chat-libre</Title>
            <Separador/>
            <Description>Canal abierto para conversaciones</Description>
        </Container>
    )
}
 
export default ChannelInfo;