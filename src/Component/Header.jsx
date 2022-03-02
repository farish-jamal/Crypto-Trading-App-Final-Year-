import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Container, makeStyles, MenuItem, Select } from '@material-ui/core';

const useStyles = makeStyles(() =>({
    Title:{
      color: "gold",
      flex: 1,
      fontWeight: "bold",
      cursor: "pointer"
  }
  }))
  
  function Header() {
  const classes = useStyles();
  return (
    <AppBar position="static" color='transparent'>
      <Container >
        <Toolbar>
          <Typography variant='h6' className={classes.Title}>
            Crypto Hunter
          </Typography>
          <Select variant='outlined' style={{
            height: 40,
            width: 100,
            marginRight: 15
          }}>
            <MenuItem value="USD">USD</MenuItem>
            <MenuItem value="INR">INR</MenuItem>
          </Select>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header