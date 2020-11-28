import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import withWidth from '@material-ui/core/withWidth';
import PropTypes from 'prop-types'
import compose from 'recompose/compose';

// material
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  ...theme.spreadThis,
  aboutText: {
    whiteSpace: 'pre-wrap',
    paddingTop: '1rem'
  }
});

const Text1 = "BLK Labs is an international web development company focused on building and deploying complex solutions. We utilize comprehensive digital consulting experience and employ build-execute-deploy model to provide effective solutions taking into account advanced seamless scaling and integration strategy. \n\nAt our heart, we really are just a team of remote strategists and developers who enjoy code. It is addiction, skill, and passion. That is our vision; using our addiction to create products and provide solutions that work well."
const Text2 = "We are a team devoted to each project from beggining to end. We combine creativity and modern development techniques to make digital experiences with quality design and optimal and efficient development. We love to work with people, for people, and give meaning to your work through our perceptive approaches to development. \n\nSince design and digital technology are continuously evolving, we undertand the need to constantly recycle and learn new tools. We have the capacity to experiment and make innovative ideas come to life. With us, the potential to visualize all possibilities is endless."

class AboutText extends Component {
  render() {

    const { width, classes } = this.props;

    return (
      <Grid container style={{ overflow: 'hidden' }}>
        <Grid container direction="row" justify="center" alignItems="center" className="aboutBG">
          <Grid item xs={11} sm={9} md={8}>
            <small className="smallText" style={{ margin: '0' }}>ABOUT US</small>
            <Typography className="aboutText">{Text1}</Typography>
          </Grid>
        </Grid>
        <div className="cont">
          <Grid container
          direction="row"
          justify="center"
          alignItems="center"
          style={{ padding: '5% 1.5rem' }}
          >
          <Grid item xs={11} sm={9} md={8}>
            <small className="smallText" style={{ margin: '0' }}>WHY US</small>
            <Typography className={classes.aboutText} variant={(width === 'xs' || width === 'sm') ? "body1" : "h6"}>{Text2}</Typography>
          </Grid>
          </Grid>
        </div>
      </Grid>
    );
  }
}

AboutText.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired
}

export default compose(
  withStyles(styles),
  withWidth()
)(AboutText);