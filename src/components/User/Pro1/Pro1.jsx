/* eslint-disable */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Switch from "@material-ui/core/Switch";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import ImgTxt2 from '../ImgTxt2/ImgTxt2';
import Wshlst from "../../../static/User/Navbar/book.png";

const useStyles = makeStyles((theme) => ({
  root: {

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
          <IconButton
            color="none"
            background="transparent"
          >
            <ImgTxt2 text="WISHLIST" img={Wshlst} />
          </IconButton>

        </div>
      )}
    </div>
  );
}

