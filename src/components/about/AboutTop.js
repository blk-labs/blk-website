import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types'
import compose from 'recompose/compose';
import withWidth from '@material-ui/core/withWidth';

// material
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// Other
import Typewriter from 'typewriter-effect';

const styles = (theme) => ({
  ...theme.spreadThis,
  topGrid: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '0 1rem'
  },
  topBody: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      justifyContent: 'auto',
    }
  },
  typeText: {
    fontSize: '2.125rem',
    textTransform: 'uppercase',
    [theme.breakpoints.up('md')]: {
      margin: '1rem 0',
      fontSize: '3rem',
    }
  },
  topText: {
    About: '1.5rem',
    [theme.breakpoints.up('sm')]: {
      padding: '1rem 15%',
    }
  }
});

class AboutTop extends Component {

  render() {

    const { width, classes } = this.props;

    return (
      <Grid container>
        <Grid item xs={12} className={classes.topCont}>
        <Grid style={{ height: '100%' }} container direction="row" justify="center" alignItems="center">
          <Grid item xs={12} md={7} className={classes.topGrid}>
            <div className={classes.topBody}>
            <div className={classes.typeText}>
              <Typewriter
                options={{
                  strings: [ 'Bonjour,', 'Hola,', 'Namaste,', 'Nǐ hǎo,', 'Konnichiwa,', 'Olá,', 'Marhaba,', 'Hello,' ],
                  cursor: null,
                  autoStart: true,
                  loop: true,
                }}
              />
              </div>
            <Typography style={{ marginLeft: '.75rem' }} variant={(width === 'xs' || width === 'sm') ? 'h4' : 'h3'}>WE ARE BLK LABS</Typography>
            </div>
          <Typography className={classes.topText} variant="h6">Not your everyday tech company - we are remote developers who enjoy transforming business ideas into digital solutions</Typography>
          </Grid>
         </Grid>
        </Grid>
      </Grid>
    );
  }
}

AboutTop.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired
}

export default compose(
  withStyles(styles),
  withWidth()
)(AboutTop);