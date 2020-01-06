import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {Link} from "react-router-dom"
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import HomeIcon from '@material-ui/icons/Home'
import BackupRoundedIcon from '@material-ui/icons/BackupRounded';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import SettingsIcon from '@material-ui/icons/Settings';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    // flexGrow: 1,
    // padding: theme.spacing(3),
    // textalign: '-webkit-center',
    flexGrow: 1,
    padding: theme.spacing.unit * 3,

  
    width:900,
  },
  spacingComponent:{
    display : 'flex',
    // justifyContent:'space-between',
    justifyContent:'space-around',
    marginLeft: 'auto',
   

},
 
}));

export default function MiniDrawer(props) {
  const classes = useStyles();
  const { children } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClickIcon = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
       <CssBaseline />
      <AppBar
      color="white"
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            My Books
          </Typography>
          <div className={classes.spacingComponent} >
         
          <Link to={`/upload`}>
           
          <Button variant="contained" color="primary" className={classes.button1} style={{ marginRight: '10px'}}>
                    Upload     
                </Button>
                </Link>
                <Link to={`/home`}>
                <Button variant="outlined" className={classes.button2} onClick={()=>{localStorage.removeItem('token');localStorage.removeItem('id')}} >
                    Log Out
                </Button>
                </Link>

               
               
                </div>
        </Toolbar>
      </AppBar> 
   
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
     
           <List>

           <Link to={`/session`}>
      <ListItem button >
      <ListItemIcon><HomeIcon /> </ListItemIcon>
        {/* <Link to={`/session`}> */}
        <ListItemText primary="Acceuil" />
        {/* </Link> */}
 </ListItem>
</Link>
<div>
<Link to={`/profile`}>
      <ListItem button>
      <ListItemIcon>  <AccountCircle /> </ListItemIcon>

     
        <ListItemText primary="Profile" />
       
</ListItem>
</Link>
</div>

<div>
<Link to={`/library`}>
<ListItem button>
      <ListItemIcon><LocalLibraryIcon /> </ListItemIcon>

    
        <ListItemText primary="Library" />
       
</ListItem>
</Link>
</div>

<div>
<Link to={`/upload`}>
<ListItem button>
      <ListItemIcon><BackupRoundedIcon/> </ListItemIcon>

    
        <ListItemText primary="Upload" />
       
</ListItem>
</Link>
</div>
<div>
<Link to={`/settings`}>
<ListItem button>
      <ListItemIcon><SettingsIcon /> </ListItemIcon>

     
        <ListItemText primary="Setting" />
       
</ListItem>
</Link>
</div>



      <Divider />
     
    </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        
          
{children}

      
       
      </main>
    </div>
  );
}