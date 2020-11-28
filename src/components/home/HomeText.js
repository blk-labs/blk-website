import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import TrackVisibility from 'react-on-screen';

// Mui
import Container from '@material-ui/core/Container';

const styles = (theme) => ({
	...theme.spreadThis,
	bodyCont: {
		position: 'relative',
		backgroundColor: 'white',
		overflow: 'hidden'
	},
	textCont: {
		fontSize: '2rem',
		padding: '5rem 0',
		fontWeight: 'bold',
		color: 'white',
		[theme.breakpoints.up('md')]: {
			padding: '10rem 0',
			textAlign: 'center'
		},
	},
	cont: {
		display: 'flex',
		justifyContent: 'center',
		fontWeight: 'bold',
		textTransform: 'uppercase',
		position: 'relative',
		zIndex: '10',
		[theme.breakpoints.down('sm')]: {
			padding: '0rem 5rem'
		},
		[theme.breakpoints.down('md')]: {
			padding: '0rem 7rem'
		}
	},
});

const ComponentToTrack = (props) => {
    const compToTrack = props.isVisible ? (
		    <span>
		    	<div style={{ display: 'flex', justifyContent: 'center' }}>
		    		<div className="aniText1">
		    			<small className="smallText">design.</small>
		    		</div>
		    		<div className="aniText2">
		    			<small className="smallText">develop.</small>
		    		</div>
		    		<div className="aniText3">
		    			<small className="smallText">manage.</small>
		    		</div>
		    	</div>
				<div className="homeText aniText4">
					<p>
						We are a team of remote designers and developers who enjoy building scalable and intuitive web solutions with advanced development technologies.
					</p>
				</div>
			</span>
	    ) : (
	    	<span>
	    		<div style={{ opacity: 0, display: 'flex', justifyContent: 'center' }}>
	    			<div>
	    				<small className="smallText">design.</small>
	    			</div>
	    			<div>
	    				<small className="smallText">develop.</small>
	    			</div>
	    			<div>
	    				<small className="smallText">manage.</small>
	    			</div>
	    		</div>
				<div style={{ opacity: 0 }} className="homeText">
					<p>
						We are a team of remote designers and developers who enjoy building scalable and intuitive web solutions with advanced development technologies.
					</p>
				</div>
			</span>
		);

    return <span>{compToTrack}</span>
};

const TrackComp = (props) => {
	const compToTrack = props.isVisible ? (
		<div className="homeTextCont aniBackG"></div>
	) : null;

    return <span>{compToTrack}</span>
};

class HomeText extends Component {

	render() {

		const { classes } = this.props;

		return (
			<div className={classes.bodyCont}>
				<TrackVisibility className={classes.homeTextCont} once partialVisibility>
				<Container maxWidth="lg">
					<TrackVisibility once partialVisibility>
						<TrackComp />
					</TrackVisibility>
				<div className={classes.textCont}>
					<div className={classes.cont}>
						<TrackVisibility once partialVisibility>
							<ComponentToTrack />
						</TrackVisibility>
					</div>
				</div>
				</Container>
				</TrackVisibility>
			</div>
		);
	}
}

export default withStyles(styles)(HomeText);