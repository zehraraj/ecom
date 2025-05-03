/* eslint-disable */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Switch from '@material-ui/core/Switch';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ImgTxt2 from '../ImgTxt2/ImgTxt2';
import Bag from '../../../static/User/Navbar/bag.png';

import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    button: {
      "&:hover": {
        backgroundColor: "transparent"
      }
    }
  },

}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  return (
    <div className={classes.root}>
      {auth && (
        <div>
          <IconButton className={classes.button}
            // aria-label="account of curren  t user"
            // aria-controls="menu-appbar"
            disableRipple="true"
            aria-haspopup="true"
            color="inherit"
          >

            <ImgTxt2 text=" MY CART" img={Bag} />
          </IconButton>

        </div>
      )}
    </div>
  );
}
