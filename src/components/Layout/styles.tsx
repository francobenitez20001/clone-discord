import styled from "styled-components";

//SL - server list
//SN - Server Name
//CI - Channel Info
//CL - Channel list
//CD - Channel Data
//UL - User List
//UI - User -Info

export const Grid = styled.div`
   display:grid;
   /* primer columna mide 71, la segunda 240, la ultima 240 y la tercera automatica */
   grid-template-columns:71px 240px auto 240px; 
   grid-template-rows:46px auto 52px; 
   grid-template-areas:
   'SL SN CI CI'
   'SL CL CD UL'
   'SL UI CD UL'; 
   height:100vh;
`;