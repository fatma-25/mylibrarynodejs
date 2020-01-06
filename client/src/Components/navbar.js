import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from "react-router-dom"




const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  spacingComponent:{
    display : 'flex',
    justifyContent:'space-between',
},
  button1: {
    margin: theme.spacing(1),
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    backgroundImage: 'linear-gradient(to right top, #3a3a3b, #5e6163, #838b8b, #aeb7b2, #e0e3d9)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    // padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgb(138, 130, 130)',
    textTransform: 'capitalize',
  },
  button2: {
    margin: theme.spacing(1),
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    // backgroundImage: 'linear-gradient(to right top, #3a3a3b, #5e6163, #838b8b, #aeb7b2, #e0e3d9)',
     
    // borderRadius: 3,
    // border: 0,
    height: 48,
    // padding: '0 30px',
    textTransform: 'capitalize',
    // boxShadow: '0 3px 5px 2px rgb(138, 130, 130)',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    display : 'flex',
    justifyContent:'space-between',
  },
 

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Navbar(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [open, setOpen] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClickIcon = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const handleClick = () => {
    setOpen(!open);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" color="white" className={classes.appBar}>
        <Toolbar className={classes.spacingComponent}>
         
          <Typography variant="h6" noWrap>
            My Books
          </Typography>
          <div>
          <Link to={`/signin`}>
          <Button variant="contained" color="primary" className={classes.button1}>
                    SignIn      
                </Button>
                </Link>
                <Link to={`/signup`}>
                <Button variant="outlined" className={classes.button2}  >
                    SignUp
                </Button>
                </Link>
                </div>
            
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        
      
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {/* {children} */}
       
      </main>
    </div>
   
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

export default Navbar;