import React from 'react';
import ChannelData from '../ChannelData';
import ChannelInfo from '../ChannelInfo';
import ChannelList from '../ChannelList';
import ServerList from '../ServerList';
import ServerName from '../ServerName';
import UserInfo from '../UserInfo';
import UserList from '../UserList';
import {Grid} from './styles';

export interface LayoutProps {
    
}
 
const Layout: React.SFC<LayoutProps> = () => {
    return <Grid>
        <ServerList/>
        <ServerName/>
        <ChannelInfo/>
        <ChannelList/>
        <UserInfo/>
        <UserList/>
        <ChannelData/>
    </Grid>
}
 
export default Layout;
