import React from 'react'
import { Button } from './styles';
import Logo  from '../../assets/Logo.svg';

export interface Props {
    selected?:boolean;
    isHome?:boolean;
    hasNotifications?:boolean;
    mentions?:number;
}
 
const ServerButton: React.SFC<Props> = ({
    selected,
    isHome,
    hasNotifications,
    mentions
}) => {
    return (
        <Button
            isHome={isHome}
            hasNotifications={hasNotifications}
            mentions={mentions}
            className={selected ? 'active':''}>
            {isHome ? <img src={Logo} alt="Discord"/>:null}
        </Button>
    );
}
 
export default ServerButton;