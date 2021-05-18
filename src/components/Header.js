import React from 'react';

import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import PhoneIcon from '@material-ui/icons/Phone';
import TelegramIcon from '@material-ui/icons/Telegram';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Fab } from '@material-ui/core'



function Header() {
    return (
      <div>
     
     
     

     <CardActionArea>
          <CardMedia
          component="img"
          alt="first"
          height="200"
          width="700"
          image="http://picsum.photos/700/300?random=1"
          title="Contemplative Reptile"
        />
        
        <CardContent>
          <Typography gutterBottom variant="h1" component="h1" style={{position: "absolute", marginTop: "-14rem", color: "whitesmoke", marginLeft: '6%', textShadow: "1px 1px #000000"}}>
                      This is CV
          </Typography>
          
          <Typography variant="body3" color="textSecondary" component="p" style={{position: "absolute", marginTop: "-7.7rem", left: '50%', color: "whitesmoke", textShadow: "0.5px 0.5px #000000",}}>
          junior web-developer
          
  </Typography>
  <Fab href="tel:+7-992-023-93-12" size="small" style={{position: "absolute", marginTop: "-13rem", left: '3px', opacity: '0.6'}}>
    <PhoneIcon fontSize="small"/>
</Fab>

<Fab href="https://t.me/Keyjey101" size="small" style={{position: "absolute", marginTop: "-10rem", left: '3px', opacity: '0.6'}}>
    <TelegramIcon fontSize="small" />
</Fab>

<Fab href="https://github.com/Keyjey101" size="small" style={{position: "absolute", marginTop: "-7rem", left: '3px', opacity: '0.6'}}>
    <GitHubIcon fontSize="small" />
</Fab>




        </CardContent>
</CardActionArea>


      </div>
    );
  }
  
  export default Header;