import React from 'react';


import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';

import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';



export const CardToCollapse = (props) => {

return (
<div>

<Collapse in={props.slide === props.num && true} collapsedHeight={0}>
  <Paper elevation={0} >
  <CardActionArea>
  <CardMedia
  component="img"
  alt="second"
  height="400"
  width="700"
  image={props.img}
  title="Contemplative Reptile"
  className='Skill-img'
/>

<CardContent>
  <Typography gutterBottom variant="h2" component="h1" style={{position: "absolute", marginTop: "-25rem", color: "whitesmoke", textShadow: "0.5px 0.5px #000000",}}>
  {props.title}
  </Typography>
  <Typography variant="body1" color="textSecondary" component="p" style={{position: "absolute", marginTop: "-19rem", color: "whitesmoke", textShadow: "0.5px 0.5px #000000",}}>
  {props.content}
  </Typography>
</CardContent>
</CardActionArea>
  </Paper>
</Collapse>
</div>
)
}