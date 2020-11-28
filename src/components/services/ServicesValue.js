import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typewriter from 'typewriter-effect';
import TrackVisibility from 'react-on-screen';

// Mui
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const styles = (theme) => ({
  ...theme.spreadThis,
  gridCont: {
    padding: '0 0 7.5%'
  },
  textClass: {
    fontWeight: '800',
    fontFamily: 'Roboto!important',
    margin: '7.5% 0 5%'
  },
  gridType: {
    height: '400px',
    position: 'relative',
    overflow: 'hidden'
  }
});


const text = [
  { text: 'we develop not for the money, but for the fun', delay: 0},
  { text: 'good design adds value faster than it adds cost', delay: 5},
  { text: 'developing is signing up for a life of learning', delay: 10},
  { text: `coding isn't about perfection; it's trial and error`, delay: 15},
  { text: 'giving great services brings you great rewards', delay: 20},
]


const ComponentToTrack = (props) => {
    const compToTrack = props.isVisible ? (
      <span>
        {text.map((text, index) => (
          <div key={index} className="typeText" style={{ animationDelay: `${text.delay}s` }}>
            <Typewriter
              onInit={(typewriter) => { typewriter.pauseFor(text.delay*1000).typeString(text.text).pauseFor(20000).start() }}
              options={{ delay: 30, cursor: '' }}
            />
          </div>
          ))
        }
      </span>
      ) : (
      <span style={{ height: '400px' }}>

      </span>
      );

    return <span>{compToTrack}</span>
};

class ServicesValue extends Component {

  render() {

    const { classes } = this.props;

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
            <small className="smallText" style={{ margin: '0' }}>OUR COMMITMENT</small>
          </div>
          <Grid>          
            <Typography variant="h6">Our team isn’t always about designing and developing; we carry a deep enthusiasm about learning and try to inspirate each other to be better developers and push boundaries. We bring this passion to our work, and adhire to a few core beliefs when working on your product.</Typography>
            <Typography variant="h4" className={classes.textClass}>We believe that...</Typography>
            <Grid className={classes.gridType}>
              <TrackVisibility once partialVisibility>
                <ComponentToTrack />
              </TrackVisibility>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(ServicesValue);