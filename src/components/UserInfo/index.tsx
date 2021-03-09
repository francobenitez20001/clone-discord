import React from 'react';
import {Container,Profile,Icons,Avatar,UserData,MicrophoneIcon,HeadPhoneIcon,ConfigIcon} from './styles';
  
export interface UserInfoProps {
    
}
 
const UserInfo: React.SFC<UserInfoProps> = () => {
    return (
        <Container>
            <Profile>
                <Avatar/>
                <UserData>
                    <strong>Franco Benitez</strong>
                    <span>#1234</span>
                </UserData>
            </Profile>
            <Icons>
                <MicrophoneIcon/>
                <HeadPhoneIcon/>
                <ConfigIcon/>
            </Icons>
        </Container>
    )
}
 
export default UserInfo;