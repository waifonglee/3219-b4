import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from "react-router-dom";


const NavBar = () => {
    let history = useHistory();
    
    function handleClickCreate() {
        history.push('/create');
    }

    function handleGoHome() {
      history.push('/');
  }
    
    return (
          <AppBar position="static">
            <Toolbar>
              <Button color="inherit" onClick = {handleGoHome}>Home</Button>
              <Button color="inherit" onClick = {handleClickCreate}>Create Post</Button>
            </Toolbar>
          </AppBar>
      );
}

export default NavBar