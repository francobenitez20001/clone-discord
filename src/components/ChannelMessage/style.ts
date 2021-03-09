import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    align-items:center;
    background-color:transparent;
    padding:4px 16px;

    &.mention {
        background-color: var(--mention-message);
        border-left: 2px solid var(--mention-detail);
        padding-left: 14px;
    }
    & + div {
        margin-top: 13px;
    }
`;

export const Avatar = styled.div`
    display:flex;
    align-items:center;
    width:40px;
    height:40px;
    border-radius:50%;
    background-color:var(--secondary);

    &.bot {
        background-color: var(--mention-detail);
    }
`;

export const Data = styled.div`
    min-height:40px;
    display:flex;
    justify-content:center;
    flex-direction:column;
    margin-left:17px;
`;

export const Header = styled.div`
    display:flex;
    align-items:center;
    > strong{
        font-size: 16px;
        color:var(--white);
    }

    >span{
        margin-left:6px;
        background-color:var(--discord);
        color:var(--white);
        border-radius:4px;
        padding:4px 5px;

        text-transform:uppercase;
        font-weight:bold;
        font-size:11px; 
    }

    > time{
        font-size: 13px;
        margin-left:6px;
        color:var(--gray);
    }
`;

export const Content = styled.div`
  text-align: left;
  font-size: 16px;
  color: var(--white);
`;

export const Mention = styled.span`
  color: var(--link);
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;