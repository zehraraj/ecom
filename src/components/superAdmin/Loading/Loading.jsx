/* eslint-disable */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  loadingRoot: {
    display: 'flex',
    width: '100%',
    height: '80vh',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default function Loading() {
  const classes = useStyles();

  return (
    <div className={classes.loadingRoot}>
      <CircularProgress size="10vw" variant="indeterminate" color="#0e0030" />
    </div>
  );
}