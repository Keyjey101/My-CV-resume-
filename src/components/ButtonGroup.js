import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';

import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';

import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import {CardToCollapse} from './CardToCollapse'



export const buttonGroup = (props) => {
return (
    
    <ToggleButton value={props.num} aria-label={props.num} className={props.classNameButton}>
        <p>{props.title}</p>
      </ToggleButton>


)
}