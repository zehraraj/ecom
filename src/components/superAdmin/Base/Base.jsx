/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Backdrop from "@material-ui/core/Backdrop";
import {
  makeStyles,
  useTheme,
  MuiThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";

import { Link } from "react-router-dom";

import TokenInjector from "../../../middleware/injectors/tokenInjector";
import Logo from "../../../static/superAdmin/sitelogo/tokike-black.png";
import Logout from "../../../static/superAdmin/User/login3.png";
import "./Base.css";

// const drawerWidth = 240;
const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  deskHidden: {
    display: "none",
    "@media only screen and (min-width: 1024px)": {
      display: "block",
    },
  },
  drawer: {
    "@media only screen and (min-width: 1024px)": {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    backgroundColor: "#FFF",
    color: "#0e0030",
    zIndex: theme.zIndex.drawer + 1,
    // paddingTop: '0.5vh',
    "@media only screen and (min-width: 1024px)": {
      paddingTop: "0vh",
      // width: `calc(100% - ${drawerWidth}px)`,
      // marginLeft: drawerWidth,
    },
  },
  logoDiv: {
    display: "flex",
  },
  logo: {
    // height: "4vh",
    height: "2.5vh",
    "@media only screen and (min-width: 1024px)": {
      height: "1.5vw",
    },
  },
  headerRight: {
    display: "flex",
    alignItems: "center",
    height: "auto",
    "@media only screen and (min-width: 1024px)": {},
  },
  headerContent: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  headerRightText: {
    fontSize: "2vh",
  },
  logoutDiv: {
    height: "fit-content",
    weight: "fit-content",
    display: "flex",
  },
  logout: {
    marginLeft: "1vh",
    height: "2vh",
    cursor: "pointer",
    "@media only screen and (min-width: 1024px)": {
      marginLeft: "1vw",
    },
  },
  menuButton: {
    marginRight: theme.spacing(0),
    "@media only screen and (min-width: 1024px)": {
      display: "none",
    },
  },
  item: {
    width: "100%",
    paddingTop: "2vh",
    paddingBottom: "2vh",
    paddingLeft: "5vw",
    paddingRight: "5vw",
    "@media only screen and (min-width: 1024px)": {
      paddingTop: "1vw",
      paddingBottom: "1vw",
      paddingLeft: "0.6vw",
      paddingRight: "0.6vw",
    },
  },
  nested: {
    paddingTop: "1vh",
    paddingBottom: "1vh",
    paddingLeft: "15vw",
    "@media only screen and (min-width: 1024px)": {
      paddingTop: "0.5vw",
      paddingBottom: "0.5vw",
      paddingLeft: "3.5vw",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  customToolbar: {
    display: "none",
    ...theme.mixins.toolbar,
    "@media only screen and (min-width: 1024px)": {
      display: "block",
    },
  },
  drawerPaper: {
    background: "#0e0030",
    color: "#fff",
    width: drawerWidth,
    // marginTop: ,
    "@media only screen and (min-width: 1024px)": {
      // marginTop: '4.0vw',
    },
  },
  mainDiv: {
    width: "100%",
    flexGrow: 1,
    // display: 'flex',
    // flexDirection: 'column',
    // paddingTop: theme.spacing(3),
    // marginBottom: theme.spacing(3),
  },
  contentDiv: {
    height: "100%",
  },
}));

function Base(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const email = TokenInjector.getInstance().getEmail();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const logout = () => {
    localStorage.clear();
    props.history.push("/login");
  };

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClick1 = () => {
    setOpen1(!open1);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <React.Fragment>
      <div>
        <div className={classes.customToolbar} />
        <Divider />
        <List>
          <ListItem
            className={classes.item}
            button
            component={Link}
            to="/SuperAdmin/"
          >
            <ListItemText
              disableTypography
              primary={
                <Typography className={classes.typography}>
                  DASHBOARD
                </Typography>
              }
            />
          </ListItem>

          <ListItem className={classes.item} button onClick={handleClick}>
            <ListItemText
              disableTypography
              primary={
                <Typography className={classes.typography}>CATELOG</Typography>
              }
            />
            {open ? (
              <ExpandLess className={classes.icon} />
            ) : (
              <ExpandMore className={classes.icon} />
            )}
          </ListItem>

          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                button
                className={classes.nested}
                component={Link}
                to="/SuperAdmin/Products/"
              >
                <ListItemText
                  disableTypography
                  primary={
                    <Typography className={classes.typography}>
                      PRODUCTS
                    </Typography>
                  }
                />
              </ListItem>

              <ListItem
                button
                className={classes.nested}
                component={Link}
                to="/SuperAdmin/Categories/"
              >
                <ListItemText
                  disableTypography
                  primary={
                    <Typography className={classes.typography}>
                      CATEGORIES
                    </Typography>
                  }
                />
              </ListItem>

              <ListItem
                button
                className={classes.nested}
                component={Link}
                to="/SuperAdmin/Collection/"
              >
                <ListItemText
                  disableTypography
                  primary={
                    <Typography className={classes.typography}>
                      COLLECTIONS
                    </Typography>
                  }
                />
              </ListItem>
            </List>
          </Collapse>

          <ListItem className={classes.item} button onClick={handleClick2}>
            <ListItemText
              disableTypography
              primary={
                <Typography className={classes.typography}>
                  CONFIGURATION
                </Typography>
              }
            />
            {open2 ? (
              <ExpandLess className={classes.icon} />
            ) : (
              <ExpandMore className={classes.icon} />
            )}
          </ListItem>

          <Collapse in={open2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                button
                className={classes.nested}
                component={Link}
                to="/SuperAdmin/Attribute/"
              >
                <ListItemText
                  disableTypography
                  primary={
                    <Typography className={classes.typography}>
                      ATTRIBUTES
                    </Typography>
                  }
                />
              </ListItem>

              <ListItem
                button
                className={classes.nested}
                component={Link}
                to="/SuperAdmin/AttributeGroup/"
              >
                <ListItemText
                  disableTypography
                  primary={
                    <Typography className={classes.typography}>
                      ATTRIBUTE GROUP
                    </Typography>
                  }
                />
              </ListItem>
            </List>
          </Collapse>

          <ListItem
            button
            className={classes.item}
            component={Link}
            to="/SuperAdmin/Orders/"
          >
            <ListItemText
              disableTypography
              primary={
                <Typography className={classes.typography}>ORDERS</Typography>
              }
            />
          </ListItem>

          <ListItem button className={classes.item} onClick={handleClick1}>
            <ListItemText
              disableTypography
              primary={
                <Typography className={classes.typography}>
                  DISCOUNTS
                </Typography>
              }
            />
            {open1 ? (
              <ExpandLess className={classes.icon} />
            ) : (
              <ExpandMore className={classes.icon} />
            )}
          </ListItem>

          <Collapse in={open1} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                button
                className={classes.nested}
                component={Link}
                to="/SuperAdmin/Sales/"
              >
                <ListItemText
                  disableTypography
                  primary={
                    <Typography className={classes.typography}>
                      SALES
                    </Typography>
                  }
                />
              </ListItem>

              <ListItem
                button
                className={classes.nested}
                component={Link}
                to="/SuperAdmin/Vouchers/"
              >
                <ListItemText
                  disableTypography
                  primary={
                    <Typography className={classes.typography}>
                      VOUCHERS
                    </Typography>
                  }
                />
              </ListItem>
            </List>
          </Collapse>

          <ListItem
            button
            className={classes.item}
            component={Link}
            to="/SuperAdmin/Invoice/"
          >
            <ListItemText
              disableTypography
              primary={
                <Typography className={classes.typography}>INVOICES</Typography>
              }
            />
          </ListItem>

          <ListItem
            className={classes.item}
            button
            component={Link}
            to="/SuperAdmin/Users/"
          >
            <ListItemText
              disableTypography
              primary={
                <Typography className={classes.typography}>USERS</Typography>
              }
            />
            {/* {open2 ? <ExpandLess style={{ fill: '#FFF' }} /> : <ExpandMore style={{ fill: '#FFF' }} />} */}
          </ListItem>
          {/* <ListItem
            button
            className={classes.item}
            component={Link}
            to="/SuperAdmin/Settings/"
          >
            <ListItemText
              disableTypography
              primary={
                <Typography className={classes.typography}>SETTINGS</Typography>
              }
            />
          </ListItem> */}
        </List>
      </div>
    </React.Fragment>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.headerContent}>
            <div className={classes.logoDiv}>
              <img src={Logo} alt="" className={classes.logo} />
            </div>
            <div className={classes.headerRight}>
              <div className={classes.headerRightText}>{email}</div>
              <div onClick={() => logout()} className={classes.logoutDiv}>
                <img src={Logout} alt="" className={classes.logout} />
              </div>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        {/* For Phone */}
        <Hidden xsDown implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            BackdropProps={
              {
                // invisible: true
                // style: {
                //   marginTop: '15.6vw',
                // }
              }
            }
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        {/* For Desk */}
        {/* <Hidden mdDown implementation="css"> */}
        <Hidden className={classes.deskHidden} implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.mainDiv}>
        <div className={classes.toolbar} />
        <div className={classes.contentDiv}>{props.content}</div>
      </main>
    </div>
  );
}

Base.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Base;
