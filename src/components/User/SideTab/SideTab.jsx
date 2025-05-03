/* eslint-disable */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from '@material-ui/core/List'
import { Link } from 'react-router-dom'
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from '@material-ui/core/Typography';
import { Scrollbars } from "react-custom-scrollbars";
import "./SideTab.css";


const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    position: "absolute",
    // margin: "0vw"
    // maxWidth: 360,
  },

  palette: {
    text: {
      primary: "#FFF",
    },
    icon: {
      fill: "#FFF"
    }
  },

  typography: {
    fontFamily: [
      'RobotoSlab',
    ].join(','),
    color: '#FFF',
    fontSize: '1.2vw',
    '@media (min-width:600px)': {
      fontSize: '1.2vw',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.2vw',
    },
    fontWeight: 300
  },

  item: {
    paddingTop: '0.5vh',
    paddingBottom: '0.5vh',
    paddingLeft: '0.6vw',
    paddingRight: '0.6vw',

    '@media (min-width:600px)': {
      paddingTop: '0.7vh',
      paddingBottom: '0.7vh',
      paddingLeft: '0.6vw',
      paddingRight: '0.6vw',
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: '2vh',
      paddingBottom: '2vh',
      paddingLeft: '0.6vw',
      paddingRight: '0.6vw',
    },
  },



  nested: {
    paddingTop: '0vh',
    paddingBottom: '0vh',
    '@media (min-width:600px)': {
      paddingTop: '0vh',
      paddingBottom: '0vh',
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: '1vw',
      paddingBottom: '1vw',
      paddingLeft: '3vw'
    },
  }
}));

export default function SideNav() {
  const classes = useStyles();

  return (
    <div className="Tabcontainer">
      <div id="sidenavCont">
        <div className="tabtxt">

          <List
            className={classes.root}
          >
            <ListItem className={classes.item} button component={Link} to="/ProfileDetails/">
              <ListItemText disableTypography primary={<Typography className={classes.typography}>PROFILE DETAILS</Typography>} />
            </ListItem>

            <ListItem className={classes.item} button component={Link} to="/OrderAndReturn/">
              <ListItemText disableTypography primary={<Typography className={classes.typography}>ORDER & RETURNS</Typography>} />
            </ListItem>


            <ListItem button className={classes.item} component={Link} to="/Coupon/">
              <ListItemText disableTypography primary={<Typography className={classes.typography}>COUPONS</Typography>} />
            </ListItem>

            <ListItem button className={classes.item} component={Link} to="/Address/">
              <ListItemText disableTypography primary={<Typography className={classes.typography}>ADDRESS</Typography>} />

            </ListItem>

            <ListItem button className={classes.item} component={Link} to="/login">
              <ListItemText disableTypography primary={<Typography className={classes.typography}>LOGOUT</Typography>} />
            </ListItem>
          </List>

        </div >
      </div >
    </div >
  );
}

