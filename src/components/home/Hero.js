import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import TrackVisibility from 'react-on-screen';

// material
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

// Other
import Typewriter from 'typewriter-effect';


const styles = (theme) => ({
	...theme.spreadThis,
	homeCont: {
		height: '105vh',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		padding: '0rem 2rem'
	},
	textCont: {
		fontSize: '130%',
		color: 'gray',
		[theme.breakpoints.up('sm')]: {
			fontSize: '175%',
		}
	},
	homeBlack: {
		backgroundColor: '#262626',
		color: 'white',
		textAlign: 'center',
		[theme.breakpoints.up('md')]: {
			clipPath: 'polygon(25% 0%, 100% 0, 100% 150%, 0 100%)',
			textAlign: 'left'
		}
	},
	typeText: {
		margin: '1rem 0',
		fontSize: '4rem',
		[theme.breakpoints.up('md')]: {
			fontSize: '6.5rem'
		}
	}
});

const ComponentToTrack = (props) => {
    const compToTrack = props.isVisible ? (
    	<Typography variant="subtitle1" style={{ fontWeight: 'bold', letterSpacing: '.15rem' }}>
		    <span className="animation1">WE </span>
		    <span className="animation2">ARE </span>
		    <span className="animation3">BLK </span>
		    <span className="animation4">LABS </span>
	    </Typography>
	    ) : (
        <p style={{ opacity: 0 }}>WE ARE BLK</p>
      );

    return <span>{compToTrack}</span>
};

class Hero extends Component {

	render() {

		const { classes } = this.props;

		return (
			<Grid style={{ backgroundColor: 'white' }} container>
				<Grid item xs={12} md={5} className={classes.homeCont}>
					<Container maxWidth="xs" style={{ padding: '0' }}>
					<TrackVisibility once>
						<ComponentToTrack />
					</TrackVisibility>
						<Typography className={classes.textCont}>Transforming your business ideas into extraordinary digital products</Typography>
					</Container>
				</Grid>
				<Grid item xs={12} md={7} className={`${classes.homeBlack} ${classes.homeCont}`}>
					<Container maxWidth="xs">
						<Typography variant="h3">WE</Typography>
						<div className={classes.typeText}>
  						<Typewriter
  						  options={{
  						    strings: ['DESIGN', 'DEVELOP', 'MANAGE'],
  						    autoStart: true,
  						    loop: true,
  						  }}
  						/>
						</div>
						<Typography variant="h4">YOUR IDEAS</Typography>
					</Container>
				</Grid>
			</Grid>
		);
	}
}

export default withStyles(styles)(Hero);