import React, {useEffect, useState} from 'react'
import {Container, AppBar, Typography , Grid, Grow} from '@material-ui/core';
import memories from './images/memory1.jpg';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';
import {useDispatch} from 'react-redux';
import './style.css';
import {getPosts} from './actions/posts';

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch])

  return (
    <Container maxWidth="lg" className={classes.active}>
    <Posts setCurrentId={setCurrentId} likeCount={likeCount} setLikeCount={setLikeCount}/>

    <Form currentId={currentId} setCurrentId={setCurrentId}/>
      {/* <AppBar position="static" color="inherit">
        <Typography variant= "h2" align="center" color="inherit">
          Memories
        </Typography>
        <img src={memories} alt="Memories"/>
      </AppBar>

      <Grow in="">
        <Container>
          <Grid>
            
          </Grid>
        </Container>
      </Grow> */}
    </Container>
    
  )
}

export default App
