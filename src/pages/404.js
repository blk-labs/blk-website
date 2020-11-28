import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

// Material
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = (theme) => ({
  ...theme.spreadThis,
  gridCont: {
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bigText: {
    fontSize: '1250%',
    padding: '5% 0',
    [theme.breakpoints.down('sm')]: {
      fontSize: '750%',
    }
  },
  smallText: {
    padding: '0 0 2rem',
    [theme.breakpoints.down('sm')]: {
      width: '75%',
      textAlign: 'center'
    }
  },
  buttonClass: {
    background: 'black',
    color: 'white',
    '&:hover': {
      background: 'gray'
    }
  }
});

class _404 extends Component {

  render() {

    const { classes } = this.props;

    return (
      <div>
        <Grid  className={classes.gridCont}>
          <Typography variant="h1" className={classes.bigText}>Oops!</Typography>
          <Typography variant="h4" className={classes.normalText}>404 - PAGE NOT FOUND</Typography>
          <Typography variant="body1" className={classes.smallText}>We are sorry, but the page you requested was not found</Typography>
          <Link to="/" className="link-class">
            <Button className={classes.buttonClass} size="large" variant="contained">
              Go To Homepage
            </Button>
          </Link>
        </Grid>
        <Footer />
      </div>
    );
  }
}

export default withStyles(styles)(_404);