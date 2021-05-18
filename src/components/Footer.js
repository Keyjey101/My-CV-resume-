import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import StarsIcon from '@material-ui/icons/Stars';

export const Footer = () => {
    return (
        
        <footer> 
       
            <BottomNavigation style={{marginTop: '1rem', flexShrink: 0}}>
            
                <StarsIcon />
                <StarsIcon />
                <StarsIcon />
                <StarsIcon />
                <StarsIcon />
            </BottomNavigation>
            </footer>
    )
}