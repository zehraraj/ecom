/* eslint-disable */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Switch from '@material-ui/core/Switch';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import ImgTxt2 from '../ImgTxt2/ImgTxt2';
import Prfl from '../../../static/User/Navbar/usr.png';

import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    // marginLeft: ,
  },
  menu: {
    marginTop: "3.5vw",
    marginLeft: "-0.5vw"
  },
  // menuButton: {
  //   marginRight: theme.spacing(2),
  // },
  // title: {
  //   flexGrow: 1,
  // },
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      {auth && (
        <div>
          <IconButton
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <ImgTxt2 text="PROFILE" img={Prfl} />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            // anchorOrigin={{
            //   vertical: 'bottom',
            //   horizontal: 'right',
            // }}
            className={classes.menu}
            keepMounted
            // transformOrigin={{
            //   vertical: 'bottom',
            //   horizontal: 'right',
            // }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem component={Link} to="/ProfileDetails/">
              My Profile
            </MenuItem>

            <MenuItem component={Link} to="/login/">
              Logout
            </MenuItem>
          </Menu>
        </div>
      )}
    </div>
  );
}