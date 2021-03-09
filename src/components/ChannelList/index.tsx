import React from 'react';
import ChannelButton from '../ChannelButton';
import {Container,Category,AddCategoryIcon} from './styles';
  
export interface ChannelListProps {
    
}
 
const ChannelList: React.SFC<ChannelListProps> = () => {
    return (
        <Container>
            <Category>
                <span>Canales de texto</span>
                <AddCategoryIcon/>
            </Category>

            <ChannelButton channelName="Chat-libre" active={true}/>
            <ChannelButton channelName="Trabajo"/>
            <ChannelButton channelName="Lol"/>
            <ChannelButton channelName="CSGO"/>
            <ChannelButton channelName="FIfa"/>
        </Container>
    )
}
 
export default ChannelList;