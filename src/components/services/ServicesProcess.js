import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import TrackVisibility from 'react-on-screen';

// Mui
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// Icons
import { box, design, html, puzzle } from '../../images/services';


const styles = (theme) => ({
  ...theme.spreadThis,
  processCont: {
    padding: '7.5% 1.5rem 10%',
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      padding: '15% 1.5rem 10%',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '25% 1.5rem 10%',
    },
    '&::before': {
      backgroundColor: '#262626!important',
      top: '0%',
      [theme.breakpoints.down('sm')]: {
        borderRadius: '75% 150% 0% 0% / 10% 75% 0% 0%',
      }
    },
  }
});

const markup = [
    {image: puzzle, title: 'Strategy', body: 'We take your idea, architect, then plan your project in an agile manner.'},
    {image: design, title: 'Deisgn', body: 'We wireframe, UI/UX design, and prototype your project using modern trends.'},
    {image: html, title: 'Development', body: 'We build and test the product using modern technologies and our chosen set of tools.'},
    {image: box, title: 'Delivery', body: 'We deliver and deploy your product in a timely manner and provide maintenance if necessary.'},
  ];

const ComponentToTrack = (props) => {
    const compToTrack = props.isVisible ? (
      <Grid container direction="row" justify="space-between">
      {
        markup.map((mark, index) => (
          <Grid key={index} item xs={12} md={6} className="processClass" style={{ animationDelay: `${index}s` }}>
            <img src={mark.image} alt='processImage' className="processImg" />
            <div>
              <Typography variant='h5' className="processTitle">{mark.title}</Typography>
              <Typography variant='body1' className="processBody">{mark.body}</Typography>
            </div>
          </Grid>
        ))
      }
      </Grid>
      ) : (
      <Grid style={{ opacity: 0, height: '50vh' }}>

      </Grid>
      );

    return <span>{compToTrack}</span>
};

class ServicesProcess extends Component {

  render() {

    const { classes } = this.props;

    return (
      <Grid
      container
        className={`cont ${classes.processCont}`}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={11} sm={9}>
          <div>
            <small className="smallText" style={{ margin: '0' }}>OUR PROCESS</small>
          </div>
          <TrackVisibility once>
            <ComponentToTrack />
          </TrackVisibility>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(ServicesProcess);