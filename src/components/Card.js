import React from 'react';



import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';



export const Card = (props) => {
  return (  <CardActionArea>
    <CardMedia
    component="img"
    alt={props.alt}
    height={props.height}
    width={props.width}
    image={props.image}
    title={props.imageTitle}
  />
  
  <CardContent>
    <Typography gutterBottom variant={props.variantHeading} component="h3" className={props.styleHeading}>
    {props.HeadingText}
    </Typography>
    <Typography variant={props.variantParagraph} component="p" className={props.styleParargaph}>
    {props.ParagraphText}

    </Typography>
  </CardContent>
</CardActionArea>
  )}