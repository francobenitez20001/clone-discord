import React from 'react';
import {Container,Avatar,Data,Header,Content} from './style';

export interface ChannelMessageProps {
    key?:number;
    author:string;
    date:string;
    content:string | React.ReactElement | React.ReactNode;
    hasMention?:any;
    isBot?:any;
}

export { Mention } from './style';
 
const ChannelMessage: React.SFC<ChannelMessageProps> = (props) => {
    return (
        <Container className={props.hasMention ? 'mention' : ''}>
            <Avatar className={props.isBot ? 'bot' : ''}/>
            <Data>
                <Header>
                    <strong>{props.author}</strong>

                    {props.isBot && <span>Bot</span>}

                    <time>{props.date}</time>
                </Header>
                <Content>{props.content}</Content>
            </Data>
        </Container>
    )
}
 
export default ChannelMessage;