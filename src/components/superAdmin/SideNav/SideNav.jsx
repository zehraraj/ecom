/* eslint-disable */
// import "./SideNav.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from '@material-ui/core/List';
import { Link } from 'react-router-dom';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from '@material-ui/core/Typography';
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { Scrollbars } from "react-custom-scrollbars";

const useStyles = makeStyles(theme => ({
  root: {
    width: "20vw",
    height: "99vh",
    background: "#0e0030",
    overflow: "auto",
    display: "none",

    [theme.breakpoints.up('md')]: {
      display: "block",
    },
  },

  content: {
    marginTop: "4.2vw",
    marginBottom: "2vw",
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
      'montserrat',
    ].join(','),
    color: '#FFF',
    fontSize: '1.2vw',
    '@media (max-width:600px)': {
      fontSize: '1.2vw',
    },
    // [theme.breakpoints.up('md')]: {
    //   fontSize: '1.2vw',
    // },
    fontWeight: 300
  },

  item: {
    // paddingTop: '0.7vh',
    // paddingBottom: '0.7vh',
    // paddingLeft: '0.6vw',
    // paddingRight: '0.6vw',
    width: '100%',
    paddingTop: '1vw',
    paddingBottom: '1vw',
    paddingLeft: '0.6vw',
    paddingRight: '0.6vw',

    '@media (max-width:600px)': {
      paddingTop: '1vh',
      paddingBottom: '1vh',
      paddingLeft: '0.6vw',
      paddingRight: '0.6vw',
    },
    // [theme.breakpoints.up('md')]: {
    //   paddingTop: '2.2vh',
    //   paddingBottom: '2.2vh',
    //   paddingLeft: '0.6vw',
    //   paddingRight: '0.6vw',
    // },
  },

  icon: {
    width: '1.5vw',
    height: '1.5vw',
    fill: "#FFF",
    position: "relative"
  },

  nested: {
    // paddingTop: '0.5vh',
    // paddingBottom: '0.5vh',

    paddingTop: '0.5vw',
    paddingBottom: '0.5vw',
    paddingLeft: '3vw',

    '@media (max-width:600px)': {
      paddingTop: '0.5vh',
      paddingBottom: '0.5vh',
    },
    // [theme.breakpoints.up('md')]: {
    //   paddingTop: '1vw',
    //   paddingBottom: '1vw',
    //   paddingLeft: '3vw'
    // },
  }
}));

export default function SideNav() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClick1 = () => {
    setOpen1(!open1);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };

  return (
    <div id="sidenavContainerd">
      {/* <Scrollbars
        autoHide={true}
      > */}
      <List
        className={classes.root}
      >
        <div className={classes.content}>
          <ListItem className={classes.item} button component={Link} to="/SuperAdmin/">
            <ListItemText disableTypography primary={<Typography className={classes.typography}>DASHBOARD</Typography>} />
          </ListItem>

          <ListItem className={classes.item} button onClick={handleClick}>
            <ListItemText disableTypography primary={<Typography className={classes.typography}>CATELOG</Typography>} />
            {open ? <ExpandLess className={classes.icon} /> : <ExpandMore className={classes.icon} />}
          </ListItem>

          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                button
                className={classes.nested}
                component={Link}
                to="/SuperAdmin/Products/"
              >
                <ListItemText disableTypography primary={<Typography className={classes.typography}>PRODUCTS</Typography>} />
              </ListItem>

              <ListItem
                button
                className={classes.nested}
                component={Link}
                to="/SuperAdmin/Categories/"
              >
                <ListItemText disableTypography primary={<Typography className={classes.typography}>CATEGORIES</Typography>} />
              </ListItem>

              <ListItem
                button
                className={classes.nested}
                component={Link}
                to="/SuperAdmin/Collection/"
              >
                <ListItemText disableTypography primary={<Typography className={classes.typography}>COLLECTIONS</Typography>} />
              </ListItem>
            </List>
          </Collapse>


          <ListItem className={classes.item} button onClick={handleClick2}>
            <ListItemText disableTypography primary={<Typography className={classes.typography}>CONFIGURATION</Typography>} />
            {open2 ? <ExpandLess className={classes.icon} /> : <ExpandMore className={classes.icon} />}
          </ListItem>

          <Collapse in={open2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                button
                className={classes.nested}
                component={Link}
                to="/SuperAdmin/Attribute/"
              >
                <ListItemText disableTypography primary={<Typography className={classes.typography}>ATTRIBUTES</Typography>} />
              </ListItem>

              <ListItem
                button
                className={classes.nested}
                component={Link}
                to="/SuperAdmin/AttributeGroup/"
              >
                <ListItemText disableTypography primary={<Typography className={classes.typography}>ATTRIBUTE GROUP</Typography>} />
              </ListItem>
            </List>
          </Collapse>


          <ListItem button className={classes.item} component={Link} to="/SuperAdmin/Orders/">
            <ListItemText disableTypography primary={<Typography className={classes.typography}>ORDERS</Typography>} />
          </ListItem>

          <ListItem button className={classes.item} onClick={handleClick1}>
            <ListItemText disableTypography primary={<Typography className={classes.typography}>DISCOUNTS</Typography>} />
            {open1 ? <ExpandLess className={classes.icon} /> : <ExpandMore className={classes.icon} />}
          </ListItem>

          <Collapse in={open1} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                button
                className={classes.nested}
                component={Link}
                to="/SuperAdmin/Sales/"
              >
                <ListItemText disableTypography primary={<Typography className={classes.typography}>SALES</Typography>} />
              </ListItem>

              <ListItem
                button
                className={classes.nested}
                component={Link}
                to="/SuperAdmin/Vouchers/"
              >
                <ListItemText disableTypography primary={<Typography className={classes.typography}>VOUCHERS</Typography>} />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button className={classes.item} component={Link} to="/SuperAdmin/Invoice/">
            <ListItemText disableTypography primary={<Typography className={classes.typography}>INVOICES</Typography>} />
          </ListItem>

          <ListItem className={classes.item} button component={Link} to="/SuperAdmin/Users/">
            <ListItemText disableTypography primary={<Typography className={classes.typography}>USERS</Typography>} />
            {/* {open2 ? <ExpandLess style={{ fill: '#FFF' }} /> : <ExpandMore style={{ fill: '#FFF' }} />} */}
          </ListItem>
          <ListItem button className={classes.item} component={Link} to="/SuperAdmin/Settings/">
            <ListItemText disableTypography primary={<Typography className={classes.typography}>SETTINGS</Typography>} />
          </ListItem>
        </div>
      </List>

      {/* </Scrollbars> */}
    </div >
  );
}
