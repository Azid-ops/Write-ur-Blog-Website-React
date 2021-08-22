import React from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './Home.css';

const Home = () =>{
    return(
        <Aux>
            <img className={classes.myimage} src="https://neilpatel.com/wp-content/uploads/2017/08/blog.jpg" alt="My Blog"/>
        </Aux>
    )
}

export default Home;