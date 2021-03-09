import React from 'react';
import {Container,Info,Actions,HashtagIcon,AddPersonIcon,ConfigIcon} from './styles';
  
export interface ChannelButtonProps {
    channelName:string,
    active?:boolean
}
 
const ChannelButton: React.SFC<ChannelButtonProps> = (props) => {
    return (
        <Container className={props.active ? 'active' : ''}>
            <Info>
                <HashtagIcon/>
                <span>{props.channelName}</span>
            </Info>
            <Actions>
                <AddPersonIcon/>
                <ConfigIcon/>
            </Actions>
        </Container>
    )
}
 
export default ChannelButton;