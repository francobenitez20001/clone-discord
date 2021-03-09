import styled from "styled-components";

export const Container = styled.div`
  grid-area:UL;
  background-color: var(--secondary);
  box-shadow:rgba(0,0,0,0.2) 0px 1px 0px 0px;
  padding: 3px 6px 0 16px;
  max-height: calc(100vh - 46px);
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }
`;

export const Role = styled.span`
  font-weight: 500;
  font-size: 12px;
  color:var(--gray);
  text-transform:uppercase;
`;

export const User = styled.div`
  display:flex;
  align-items:center;
  margin-top:5px;
  padding:5px;
  cursor: pointer;
  font-size:16px;
  border-radius: 4px;
  background: transparent;
  transition: background 0.2s;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  > strong {
    font-weight: 500;
    color: var(--white);
    opacity: 0.7;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  > span {
    margin-left: 9px;
    background-color: var(--discord);
    color: var(--white);
    border-radius: 4px;
    padding: 4px 5px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 11px;
  }
`;

export const Avatar = styled.div`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--primary);
  &.bot {
    background-color: var(--mention-detail);
  }
  margin-right:8px;
`;