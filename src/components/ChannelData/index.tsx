import React from 'react';
import {Container,Chat,InputMessage,Input,InputIcon} from './style';
import ChannelMessage from '../ChannelMessage';
import { Mention } from '../ChannelMessage/style';

export interface ChannelDataProps {
    
}
 
const ChannelData: React.SFC<ChannelDataProps> = () => {
    return (
        <Container>
            <Chat>
            {Array.from(Array(15).keys()).map((n) => (
            <ChannelMessage
                key={n}
                author="Guilherme Rodz"
                date="21/06/2020"
                content="Hoje é o meu aniversário!"
            />
            ))}

            <ChannelMessage
                author="Diego Fernandes"
                date="21/06/2020"
                content={
                    <>
                    <Mention>@Guilherme Rodz</Mention>, me carrega no LoL e CS de novo
                    por favor?
                    </>
                }
                hasMention
                isBot
            />
            </Chat>
            <InputMessage>
                <Input type="text" placeholder="Conversarem #chat-livre" />
                <InputIcon />
            </InputMessage>
        </Container>
    )
}
 
export default ChannelData;