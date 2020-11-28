import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

// Mui
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// Icons
// import { box, design, html, puzzle } from '../../images/services';
import phoneImg from '../../images/home-work/smartphone.svg';
import webImg from '../../images/home-work/webImg.svg';
import supportImg from '../../images/home-work/supportImg.svg';
import designImg from '../../images/home-work/designImg.svg';
import webApp from '../../images/home-work/webApp.svg';

const styles = (theme) => ({
  ...theme.spreadThis,
  gridCont: {
    padding: '7.5% 0',
    [theme.breakpoints.down('sm')]: {
      padding: '25% 7.5%',
    }
  },
  imgClass: {
    height: '75px',
    width: 'auto',
    padding: '5% 0',
    animationName: 'workAnimate',
    animationDuration: '15s',
    animationIterationCount: 'infinite'
  },
  gridClass: {
    margin: '0 0 5%',
    paddingRight: '4rem',
  }
});

class ServicesWork extends Component {

  render() {

    const { classes } = this.props;

    const markup = [
      { image: designImg, title: 'UI/UX Design', text: 'design is everywhere, we deliver only the most user friendly interfaces', delay: 3},
      { image: webImg, title: 'Web Development', text: 'we dont just build websites that look good, we develop websites that sell', delay: 12},
      { image: webApp, title: 'Web Applications', text: 'one code for all; we develop PWA that deliver the same experience anywhere', delay: 15},
      { image: phoneImg, title: 'Mobile Applications', text: 'everyone wants to make the next great mobile application, we make it possible', delay: 9},
      { image: supportImg, title: 'Support & Maintenance', text: 'we listen to our csutomers, and make sure our relationship exists forever', delay: 6},
    ]

    return (
      <Grid
        container
        className={classes.gridCont}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={11} sm={9}>
          <div style={{ margin: '0 0 7.5%' }}>
            <small className="smallText" style={{ margin: '0' }}>OUR WORK</small>
          </div>
          <Grid container direction="row" alignItems="center">
          {
            markup.map((mark, index) => (
              <Grid key={index} item xs={12} md={6} lg={4} className={classes.gridClass}>
                <img src={mark.image} className={classes.imgClass} style={{ animationDelay: `${mark.delay*1.5}s` }} alt="service" />
                <Typography variant="h6" style={{ fontWeight: 'bold' }}>{mark.title}</Typography>
                <Typography variant="overline">{mark.text}</Typography>
              </Grid>
            ))
          }
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(ServicesWork);