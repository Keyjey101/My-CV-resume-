import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';


import Slide from '@material-ui/core/Slide'

import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';


import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link'
import Fab from '@material-ui/core/Fab';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';


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

export default function Objects() {

    
const [slider, setSlider] = React.useState('first')
const [slide, setSlide] = React.useState('')

const handleSlide = (event, newSlider, direction) => {
    setSlider(newSlider)
    setSlide(direction)
}







  const classes = useStyles();
 


  return ( 
    <div>
    

      <div className={classes.container} >
        <Slide in={slider === 'first' && true} direction={slide} mountOnEnter unmountOnExit timeout={{enter: 800, exit: 0, appear: 1000}}>
          <Paper elevation={0} className={classes.paper} >
          <CardActionArea>
          <CardMedia
          component="img"
          alt="first"
          height="400"
          width="700"
          image="http://picsum.photos/700/300?grayscale&blur=7&random=3"
          title="Список дел"
        />
        
        <CardContent>
          
        <Typography gutterBottom variant="h2" component="h1" style={{position: "absolute", marginTop: "-25rem", color: "whitesmoke", textShadow: "0.7px 0.7px #000000",}}>
          Список дел
          </Typography>

          <Typography variant="body1" color="textSecondary" onClick={() => "location.href = 'www.youtube.com';"}  component="p" style={{position: "absolute", marginTop: "-17rem", color: "whitesmoke", textShadow: "0.8px 0.9px #000000", marginLeft: '5%'}}>
          <Box>
          <Link href="https://to-do-list-kj.herokuapp.com/" >
          Live-Demo
  </Link>
   </Box>
<Box> Функционал: список дел в электронном формате, при запросе на "/" отображает список дела на текущую дату, при запросе на "/*", отображает (и создает, если нет такой записи в базе данных) * в титуле. Возможно добавление нового дела, удаление существующего дела.
</Box><Box>Использованые технологии: NodeJS+express, MongoDB-Atlas+mongoose.
</Box>
         </Typography>

          <Fab size="small" style={{opacity: '0.3', position: "absolute", marginTop: '-15rem', left: "1rem"}
          }
          onClick={()=>{handleSlide('x','third', 'right')}}
          
          >
  <ChevronLeftIcon />
</Fab>

<Fab size="small" style={{opacity: '0.3', position: "absolute", marginTop: '-15rem', right: "1rem"}
          }
          onClick={()=>{handleSlide('x','second', 'left')}}
          
          >
  <ChevronRightIcon />
</Fab>






        </CardContent>
</CardActionArea>
          </Paper>
        </Slide>
        </div>
        <div className={classes.container}>

        <Slide in={slider === 'second' && true} direction={slide} mountOnEnter unmountOnExit timeout={{enter: 800, exit: 0, appear: 0}}>
          <Paper elevation={0} className={classes.paper} >
          <CardActionArea>
          <CardMedia
          component="img"
          alt="second"
          height="400"
          width="700"
          image="http://picsum.photos/700/300?grayscale&blur=7&random=2"
          title="Заметки"
        />
        
        <CardContent>
          <Typography gutterBottom variant="h2" component="h1" style={{position: "absolute", marginTop: "-25rem", color: "whitesmoke", textShadow: "0.7px 0.7px #000000",}}>
          Заметки
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p" style={{position: "absolute", marginTop: "-17rem", color: "whitesmoke", textShadow: "0.8px 0.9px #000000", marginLeft: '5%'}}>

          <Box>
          <Link href="https://keeper-kj-app.herokuapp.com/" >
          Live-Demo
  </Link>
   </Box>
   <Box> Функционал: Сервис персональных заметок для пользователя, можно создать новую заметку, посмотреть дату добавления заметок, удалить заметку, так же есть вау-функционал в виде часов (внизу слева).
</Box><Box>Использованые технологии: NodeJS+express, React, MongoDB-Atlas+mongoose, Material-UI.
</Box>
<Box>Фичи: Авторизация/регистрация с помощью веб-токена, валидация вводимых данных, всплывающие сообщения при регистрации/ошибках.
</Box>

          </Typography>


          <Fab size="small" style={{opacity: '0.3', position: "absolute", marginTop: '-15rem', left: "1rem"}
          }
          onClick={()=>{handleSlide('x','first', 'right')}}
          
          >
  <ChevronLeftIcon />
</Fab>

<Fab size="small" style={{opacity: '0.3', position: "absolute", marginTop: '-15rem', right: "1rem"}
          }
          onClick={()=>{handleSlide('x','third', 'left')}}
          
          >
  <ChevronRightIcon />
</Fab>






        </CardContent>
</CardActionArea>
          </Paper>
        </Slide>


        
      </div>


      <div className={classes.container}>

<Slide in={slider === 'third' && true} direction={slide} mountOnEnter unmountOnExit timeout={{enter: 800, exit: 0, appear: 0}} > 
  <Paper elevation={0} className={classes.paper} >
  <CardActionArea >
  <CardMedia 
  component="img"
  alt="third"
  height="400"
  width="700"
  image="http://picsum.photos/700/300?grayscale&blur=7&random=1"
  title="Contemplative Reptile"
/>

<CardContent >
  <Typography gutterBottom variant="h2" component="h1" style={{position: "absolute", marginTop: "-25rem", color: "whitesmoke", textShadow: "0.7px 0.7px #000000",}}>
  Магазин
  </Typography>
  <Typography variant="body1" color="textSecondary" component="p" style={{position: "absolute", marginTop: "-17rem", color: "whitesmoke", textShadow: "0.8px 0.9px #000000", marginLeft: '5%'}}>

  <Box>
          <Link href="https://v-ede-ne-eva.herokuapp.com/" >
          Live-Demo
  </Link>
   лог/пасс админки по запросу
   </Box>
   <Box> Функционал: электронный магазин 
</Box><Box>Использованые технологии: NodeJS+express, React, PostgreSQL, Material-UI, react-Bootstap.
</Box>
<Box>Фичи: Авторизация с помощью токена, взаимодействие с корзиной, фильтрация по типам продуктов, постраничный вывод данных, разделение ролей юзер-админ, добавление/изменение/удаление контента для админа, отправка пользователю и менеджеру письма с деталями заказа.
</Box>




    </Typography>

  <Fab size="small" style={{opacity: '0.3', position: "absolute", marginTop: '-15rem', left: "1rem"}
          }
          onClick={()=>{handleSlide('x','second','right')}}
          
          >
  <ChevronLeftIcon />
</Fab>

<Fab size="small" style={{opacity: '0.3', position: "absolute", marginTop: '-15rem', right: "1rem"}
          }
          onClick={()=>{handleSlide('x','first','left')}}
          
          >
  <ChevronRightIcon />
</Fab>








</CardContent>
</CardActionArea>
  </Paper>
</Slide>







</div>






    </div>
  );
}