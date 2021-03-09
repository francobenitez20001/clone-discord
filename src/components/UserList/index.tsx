import React from 'react';
import { Container, Role, User, Avatar } from './styles';
  
export interface UserListProps {
    nickname: string;
    isBot?: boolean;
}

const UserRow: React.FC<UserListProps> = ({ nickname, isBot }) => {
    return (
      <User>
        <Avatar className={isBot ? 'bot' : ''} />
  
        <strong>{nickname}</strong>
  
        {isBot && <span>Bot</span>}
      </User>
    );
};
 
const UserList: React.SFC = () => {
    return (
        <Container>
            <Role>Disponible - 1</Role>
            <UserRow nickname="Guilherme Rodz" />

            <Role>Offline - 18</Role>
            <UserRow nickname="Diego Fernandes" isBot />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
        </Container>
    )
}
 
export default UserList;