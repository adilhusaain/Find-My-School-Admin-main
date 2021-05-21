import React, {useState} from 'react'
import { Button, makeStyles } from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { People, Person, ExitToApp, Dashboard, PersonAdd } from '@material-ui/icons'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Paper, Switch } from '@material-ui/core';
import { useHistory } from 'react-router'
import AddBoxIcon from '@material-ui/icons/AddBox';
//import {useAuth} from '../context/AuthContext'
//import Alert from '@material-ui/lab/Alert';


const drawerWidth = 240

  //
const useStyles = makeStyles((theme) => {
  return {
    page: {
      padding: theme.spacing(3),
    },
    root: {
      display: 'flex',
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    active: {
      background: '#f4f4f4'
    },
    title: {
      padding: theme.spacing(2),
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    adminPortal: {
      flexGrow: 1
    },
    toolbar: theme.mixins.toolbar
  }
})

export default function Layout( {children}) {

//dark mode 
const [darkMode, setdarkMode] = useState(false);
  const theme= createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: '#287EFA' ,
      }
    },
   
  });



  const classes = useStyles();
  const history= useHistory();
  /*const [error, setError]= useState(false)
  const {currentUser, logout}= useAuth()

  async function handleLogout(){
    setError('')
    try{
       await logout()
       history.push("/login")
    }
    catch {
      setError("Failed to Log out")
    }

  } */
  const menuItems = [
    { 
        text: 'Dashboard', 
        icon: <Dashboard color="primary" />, 
        path: "/"
        
      },
    { 
      text: 'Admin Log', 
      icon: <Person color="primary" />, 
      path: "/adminlog"
    },
    { 
      text: 'User Log', 
      icon: <People color="primary" />, 
      path: "/userlog"
    
    },
    { 
      text: 'Add Institute', 
      icon: <AddBoxIcon color="primary" />, 
      path: "/addinstitute"
    
    },
    { 
      text: 'Add Admin', 
      icon: <PersonAdd color="primary" />, 
      path: "/addadmin"
    
    },
  ];

  return (

     <ThemeProvider theme={theme}>
      <Paper style={{ height: "100vh"}}>



    <div className={classes.root}>
      {/* app bar */}
      <AppBar 
        position="fixed" 
        className={classes.appBar}
        elevation={0}
        color="primary"
      >
        <Toolbar>
          <Typography component="h1" variant="h4" className={classes.adminPortal}>
           Find My School Administration Portal
          </Typography>
          <Switch checked={darkMode} onChange= {() => setdarkMode(!darkMode)} ></Switch>
           <NotificationsActiveIcon className={classes.title} />
          <Button color= "inherit"  onClick={()=>{window.localStorage.removeItem("users"); window.location.reload(); return false}} startIcon= { <ExitToApp/> }>Log Out</Button>
        </Toolbar>
      </AppBar>

      {/* side drawer */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{ paper: classes.drawerPaper }}
        anchor="left"
      >
        <div>
          <Typography variant="h5" className={classes.title}>
           Operations
          </Typography>
        </div>

        {/* links/list section */}
        <List>
          {menuItems.map((item) => (
            <ListItem 
              button 
              key={item.text} 
              onClick= {() => history.push(item.path)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
        
      </Drawer>

      {/* main content */}
    
      <div className={classes.page}>
        <div className={classes.toolbar}></div>

          {children}
      </div>
     
    </div>
    </Paper>
    </ThemeProvider>
  )
}