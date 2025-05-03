/* eslint-disable */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Srch from '../../../static/User/Navbar/search.png';

const useStyles = makeStyles((theme) => ({
  searchRoot: {
    // padding: '2px',
    width: 500,
    marginLeft: 150,
    display: 'flex',
    alignItems: 'center',
    height: "100%",
    "@media only screen and (max-width: 1023px)": {
      width: "100vw",
    }
  },
  paper: {
    display: 'flex',
    justifyContent: 'space-between',
    width: "100%",
    height: "3vw"
  },
  input: {
    "&::placeholder": {
      fontSize: "1vw",
    },
    marginLeft: theme.spacing(1),
  },
  iconButtonContainer: {
    "@media only screen and (max-width: 1023px)": {
      width: "1.5vw",
      // height: "1.5vw",
    }
  },
  iconButton: {
    // padding: 3,
    height: "1.5vw",
  },
}));

export default function CustomizedInputBase() {
  const classes = useStyles();

  return (
    <div className={classes.searchRoot}>
      <Paper className={classes.paper}>
        <InputBase
          className={classes.input}
          classes={{ input: classes.input }}
          placeholder="Search Products"
          inputProps={{ 'aria-label': 'search products' }}
        />
        <IconButton
          type="submit"
          aria-label="search"
          className={classes.iconButtonContainer}
        >
          <SearchIcon className={classes.iconButton} classes={{ img: classes.iconButton }} />
        </IconButton>
      </Paper>
    </div>
  );
}
