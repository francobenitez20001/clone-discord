import React from 'react';
import ServerList from '../ServerList';
import ServerName from '../ServerName';
import {Grid} from './styles';

export interface LayoutProps {
    
}
 
const Layout: React.SFC<LayoutProps> = () => {
    return <Grid>
        <ServerList/>
        <ServerName/>
    </Grid>
}
 
export default Layout;
