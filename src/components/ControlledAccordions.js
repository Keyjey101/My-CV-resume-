import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';


import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import { Card } from './Card';
import Objects from './Objects';




const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
    alignSelf: 'center',
    marginLeft: '1%'
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Мои проекты</Typography>
         
        </AccordionSummary>
        

<Objects />

        
      </Accordion>
      
     
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>О себе</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Card 
key='3'
alt = "seconds-accordeon"
height = '400'
width = '700'
image = 'http://picsum.photos/700/300?random=4'
imageTitle = 'Second image'
variantHeading = 'h3'
styleHeading = 'styleHeadingLot'
HeadingText = 'BIO'
variantParagraph = 'body1'
styleParargaph = 'styleParargaphLot'
ParagraphText = 'Евгений, 29 лет. Предыдущая должность - ведущий инженер систем отопления, вентиляции и кондиционирования. Autocad, Revit, Aveva, MS office, Danfoss, Wilo-Select, Potok, CorelDraw, Photoshop. Решил сменить сферу деятельности ввиду того, что всегда интересовали computer science. Знания: html, ccs, js (es6), react, nodeJS express, SQL, noSQL на уровне junior. Английский разговорный, документацию/стаковерфлоу читаю в оригинале.'
/>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}