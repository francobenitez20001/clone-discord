import styled from "styled-components";
import { Mic, Headset, Settings } from 'styled-icons/material';

export const Container = styled.div`
  background-color: var(--quaternary);
  grid-area:UI;
  display:flex;
  justify-content: space-between;
  align-items:center;
  padding:10px;
  box-shadow:rgba(0,0,0,0.2) 0px 1px 0px 0px;
`;

export const Profile = styled.div`
  display:flex;
  align-items:center;
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius:50%;
  background-color:var(--gray);
`;

export const UserData = styled.div`
  display:flex;
  justify-content:center;
  flex-direction:column;
  margin-left:8px;
  > strong{
    color:var(--white);
    font-weight: bold;
    font-size: 13px;
  }

  > span{
    font-weight: normal;
    font-size: 13px;
    color:var(--symbol);
  }

`;

export const Icons = styled.div`
  display:flex;
  align-items:center;
  > svg:not(:first-child) {
    margin-left: 7px;
  }
`;

export const MicrophoneIcon = styled(Mic)`
  width:20px;
  height:20px;
  color:var(--white);
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s;
  &:hover{
    opacity:1;
  }
`;

export const HeadPhoneIcon = styled(Headset)`
  width:20px;
  height:20px;
  color:var(--white);
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s;
  &:hover{
    opacity:1;
  }
`;

export const ConfigIcon = styled(Settings)`
  width:20px;
  height:20px;
  color:var(--white);
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s;
  &:hover{
    opacity:1;
  }
`;
