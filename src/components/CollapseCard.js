import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import {CardToCollapse} from './CardToCollapse'


const useStyles = makeStyles({
  toggleGroup: {
    height: 50,
    width: "100%",
    marginBottom: "-0.3rem"
  },
 toggleButton: {
    height: 50,
    width: "33%",
    size: "small",
   borderRadius: "8px",
   marginRight: "0rem",
   position: "relative"
   

 }


});

export default function CollapseCard() {

    
const [slider, setSlider] = React.useState('first')

const handleSlide = (event, newSlider) => {
  if (newSlider !== null) {
   
    setSlider(newSlider)}
    
}

  const classes = useStyles();
const content = [
  {num:'first',
  title: 'Javascript ES6',
  content:'Знание современного синтаксиса, типы данных, области видимости, запросы async/await, промисы, генераторы, циклы.',
 // img:'http://picsum.photos/700/300?random=',
 img:'https://raw.githubusercontent.com/Keyjey101/storage/master/js-template2.png',
},

  {num:'second',
  title: 'Фронт на React',
  content:'Знание и умения в применении основных хуков (State, Effect, History, Context), создание (с документацией) собственных хуков. Использование компонентов, пропсов, отправка запросов на сервер (кастомные хуки и/или axios). Комментирование своего кода/сложных моментов.',
 // img:'http://picsum.photos/700/300?random=',
 img:'https://reactjs.org/logo-og.png',
  },
  {num:'third',
  title: 'Бэк на NodeJS',
  content:'Использование фреймворка Express. Понимание и применение роутеров, контроллеров, моделей, модулей авторизации, отлов ошибок, работа с базой данных. Комментирование своего кода.',
  //img:'http://picsum.photos/700/300?random=',
  img:'https://wallpapercave.com/wp/wp6606918.jpg',
},
{num:'four',
  title: 'MDB & pSQL',
  content:'Обработка запросов CRUD на двух самых удобных базах. С помощью mongoose для MongoDB и sequlize для PostgreSQL.',
  //img:'http://picsum.photos/700/300?random=',
  img:'https://raw.githubusercontent.com/Keyjey101/storage/master/db-template.png',
  },
]


  return ( 
    <div>
    <div >
      <ToggleButtonGroup
      value={slider}
      exclusive
      onChange={handleSlide}
      aria-label="text alignment"
      className={classes.toggleGroup}
    >

      <ToggleButton value="first" aria-label="first" className={classes.toggleButton}>
        <p>JavaScript</p>
      </ToggleButton>
      <ToggleButton value="second" aria-label="second" className={classes.toggleButton}>
      <p>Frontend</p>
      </ToggleButton>
      <ToggleButton value="third" aria-label="third" className={classes.toggleButton}>
      <p>Backend</p>
      </ToggleButton>

      <ToggleButton value="four" aria-label="four" className={classes.toggleButton}>
      <p>Databases</p>
      </ToggleButton>

    </ToggleButtonGroup>
</div>




{content.map((x,index) => {
  
  return (
  <div>
  <CardToCollapse
  key={index}
  num={x.num}
  title={x.title}
  content={x.content}
  //img={x.img + index +1} reomve comment to get random picsum images
  img={x.img}  //remove this to get random picsum images
  slide={slider}
  
/>
</div>)
})}

    </div>
  );
}