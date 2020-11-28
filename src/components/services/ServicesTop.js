import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import ServicesProcess from './ServicesProcess'

// Mui
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const styles = (theme) => ({
  ...theme.spreadThis,
  serviceAnimate: {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    margin: 'auto',
    width: '636px',
    height: '400px',
    display: 'flex',
    border: '1.75px solid rgba(0,0,0,.75)',
    borderRadius: '.75rem',
    animationName: 'serviceAnimate',
    animationTimingFunction:'ease-in-out',
    animationDuration: '15s',
    animationIterationCount: 'infinite',
    [theme.breakpoints.down('sm')]: {
      width: '386px',
      height: '275px',
    },
    [theme.breakpoints.down('xs')]: {
      borderRadius: '.5rem',
      width: '315px',
      height: '230px',
    }
  },
  dotAnimate: {
    justifyContent: 'flex-end',
    width: '100%',
    height: '100%',
    display: 'flex',
    position: 'absolute',
    marginLeft: '-1rem',
    marginTop: '1rem',
    animationName: 'dotAnimate',
    animationTimingFunction:'ease-in-out',
    animationDuration: '15s',
    animationIterationCount: 'infinite',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '-.75rem',
      marginTop: '.75rem',
    }
  },
  dotClass: {
    width: '15px',
    height: '15px',
    margin: '0 2.5px',
    backgroundColor: 'rgba(0,0,0,.5)',
    borderRadius: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '11px',
      height: '11px',
    }
  },
  lineAnimate: {
    width: '100%',
    marginTop: '3rem',
    borderTop: '1px solid rgba(0,0,0,.75)',
    animationName: 'lineAnimate',
    animationTimingFunction:'ease-in-out',
    animationDuration: '15s',
    animationIterationCount: 'infinite',
    [theme.breakpoints.down('sm')]: {
      marginTop: '2rem',
    },
    [theme.breakpoints.down('xs')]: {

    }
  },
  circleAnimate: {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    opacity: '0',
    width: '1.5rem',
    height: '1.5rem',
    margin: 'auto auto 1rem',
    borderRadius: '50%',
    backgroundColor: 'rgba(0,0,0,.75)',
    animationName: 'circleAnimate',
    animationTimingFunction:'ease-in-out',
    animationDuration: '15s',
    animationIterationCount: 'infinite',
    [theme.breakpoints.down('sm')]: {
      width: '1rem',
      height: '1rem',
    }
  },
  textClass: {
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '1.5rem',
    fontSize: '160%',
    animationName: 'fontAnimate',
    animationTimingFunction:'ease-in-out',
    animationDuration: '15s',
    animationIterationCount: 'infinite',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1rem',
      fontSize: '125%',
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft: '.75rem',
      fontSize: '110%',
    }
  },
});

class ServicesTop extends Component {

  render() {

    const { classes } = this.props;

    return (
      <Grid className={classes.topCont}>
        <Grid style={{ height: '105vh' }}>
          <div className={classes.serviceAnimate}>
            <div className={classes.dotAnimate}>
              <span className={classes.dotClass}></span>
              <span className={classes.dotClass}></span>
              <span className={classes.dotClass}></span>
            </div>
            <div className={classes.lineAnimate}></div>
            <div className={classes.circleAnimate}></div>
            <Typography className={classes.textClass}>
              Develop your digital<br />
              product with the<br />
              latest and innovative<br />
              technologies
            </Typography>
          </div>
        </Grid>
        <ServicesProcess />
      </Grid>
    );
  }
}

export default withStyles(styles)(ServicesTop);