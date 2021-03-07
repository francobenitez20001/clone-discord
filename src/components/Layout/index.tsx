import React from 'react';
import ServerList from '../ServerList';
import {Grid} from './styles';

export interface LayoutProps {
    
}
 
const Layout: React.SFC<LayoutProps> = () => {
    return <Grid>
        <ServerList/>
    </Grid>
}
 
export default Layout;
