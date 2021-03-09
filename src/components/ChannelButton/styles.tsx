import styled from "styled-components";
import { PersonAdd, Settings } from 'styled-icons/material';
import {Hashtag} from 'styled-icons/heroicons-outline';

export const Container = styled.div`
  display:flex;
  justify-content: space-between;
  align-items:center;
  padding:5px 3px;
  color:var(--symbol);
  cursor: pointer;
  background-color:transparent;
  transition: background-color 0.2s;
  margin:3px 0px;
  &:hover, &.active{
    border-radius:5px;
    background-color: var(--quinary);
    color:var(--white);
  }
`;

export const Info = styled.div`
  display:flex;
  align-items:center;
  > span {
    margin:0!important;
    font-size:15px;
  }
`;

export const Actions = styled.div`
  display:flex;
`;

export const HashtagIcon = styled(Hashtag)`
  width:16px;
  height:16px;
  font-weight:400;
  color:var(--symbol);
  margin-left:4px;
  transition: color 0.2s;
  &:hover {
    color: var(--white);
  }
`;

export const AddPersonIcon = styled(PersonAdd)`
  width:16px;
  height:16px;
  font-weight:400;
  color:var(--symbol);
  margin-left:4px;
  transition: color 0.2s;
  cursor:pointer;
  &:hover {
    color: var(--white);
  }
`;


export const ConfigIcon = styled(Settings)`
  width:20px;
  height:15px;
  font-weight:400;
  color:var(--symbol);
  margin-right:5px;
  cursor:pointer;
  &:hover {
    color: var(--white);
  }
`;