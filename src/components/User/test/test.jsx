// /* eslint-disable */
// import React from "react";
// import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";
// import Drawer from "@material-ui/core/Drawer";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import List from "@material-ui/core/List";
// import Typography from "@material-ui/core/Typography";
// import IconButton from "@material-ui/core/IconButton";
// import Hidden from "@material-ui/core/Hidden";
// import Divider from "@material-ui/core/Divider";
// import MenuIcon from "@material-ui/icons/Menu";

// const drawerWidth = 240;

// const styles = (theme) => ({
//   root: {
//     flexGrow: 1,
//     height: 430,
//     zIndex: 1,
//     overflow: "hidden",
//     position: "relative",
//     display: "flex",
//     width: "100%",
//   },
//   appBar: {
//     position: "absolute",
//     marginLeft: drawerWidth,
//     [theme.breakpoints.up("md")]: {
//       width: `calc(100% - ${drawerWidth}px)`,
//     },
//   },
//   navIconHide: {
//     [theme.breakpoints.up("md")]: {
//       display: "none",
//     },
//   },
//   toolbar: theme.mixins.toolbar,
//   drawerPaper: {
//     width: drawerWidth,
//     [theme.breakpoints.up("md")]: {
//       position: "relative",
//     },
//   },
//   content: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.default,
//     padding: theme.spacing.unit * 3,
//   },
// });

// class ResponsiveDrawer extends React.Component {
//   state = {
//     mobileOpen: false,
//   };

//   handleDrawerToggle = () => {
//     this.setState((state) => ({ mobileOpen: !state.mobileOpen }));
//   };

//   render() {
//     const { classes, theme } = this.props;

//     const drawer = (
//       <div>
//         <div className={classes.toolbar} />

//         <List>abc</List>

//         <List>pqr</List>
//         <List>abc</List>

//         <List>pqr</List>
//         <List>abc</List>

//         <List>pqr</List>
//         <List>abc</List>

//         <List>pqr</List>
//         <List>abc</List>

//         <List>pqr</List>
//         <List>abc</List>

//         <List>pqr</List>
//         <List>abc</List>

//         <List>pqr</List>
//       </div>
//     );

//     return (
//       <div className={classes.root}>
//         <IconButton
//           color="inherit"
//           aria-label="Open drawer"
//           onClick={this.handleDrawerToggle}
//           className={classes.navIconHide}
//         >
//           <MenuIcon />
//         </IconButton>

//         <Hidden mdUp>
//           <Drawer
//             variant="temporary"
//             anchor={theme.direction === "rtl" ? "right" : "left"}
//             open={this.state.mobileOpen}
//             onClose={this.handleDrawerToggle}
//             classes={{
//               paper: classes.drawerPaper,
//             }}
//             ModalProps={{
//               keepMounted: true, // Better open performance on mobile.
//             }}
//           >
//             {drawer}
//           </Drawer>
//         </Hidden>
//         <Hidden smDown implementation="css">
//           <Drawer
//             variant="permanent"
//             open
//             classes={{
//               paper: classes.drawerPaper,
//             }}
//           >
//             {drawer}
//           </Drawer>
//         </Hidden>
//       </div>
//     );
//   }
// }

// ResponsiveDrawer.propTypes = {
//   classes: PropTypes.object.isRequired,
//   theme: PropTypes.object.isRequired,
// };

// export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);









import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

export default function MenuListComposition() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (

      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          Toggle Menu Grow
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
  );
}