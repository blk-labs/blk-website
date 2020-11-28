import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import TrackVisibility from 'react-on-screen';

// Images
import balloticsLogo from '../../images/home-logos/ballotics-logo.PNG';
import flexisafLogo from '../../images/home-logos/flexisaf-logo.PNG';
import geeciLogo from '../../images/home-logos/geeci-logo.PNG';
import hotfmLogo from '../../images/home-logos/hotfm-logo.png';
import mainoneLogo from '../../images/home-logos/mainone-logo.png';
import pavilionLogo from '../../images/home-logos/pavilion-logo.png';
import projecttourLogo from '../../images/home-logos/projecttour-logo.PNG';
import takeoutLogo from '../../images/home-logos/takeout-logo.png';

// Mui
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
	...theme.spreadThis,
	clientBody: {
		margin: '7.5rem auto',
		position: 'relative',
		width: '125%',
		right: '12.5%',
	  	background: '#262626',
		borderRadius: '0% 0% 50% 50% / 0% 0% 35% 35%',
		overflow: 'hidden',
		[theme.breakpoints.down('sm')]: {
			borderRadius: '0% 0% 50% 50% / 0% 0% 20% 20%'
		}
	},
	gridCont: {
		display: 'flex',
		padding: '5rem',
		alignContent: 'center',
		flexDirection: 'column',
		textAlign: 'center'
	}
});

const ComponentToTrack = (props) => {
    const compToTrack = props.isVisible ? (
		    <div className="clientCont">
		    	<Grid container>
		    		<Grid item container justify="center" xs={6} sm={4} md={3}>
		    			<img alt="clientLogo" src={balloticsLogo} className="clientClass clientAni1" />
		    		</Grid>
		    		<Grid item container justify="center" xs={6} sm={4} md={3}>
		    			<img alt="clientLogo" src={flexisafLogo} className="clientClass clientAni2" />
		    		</Grid>
		    		<Grid item container justify="center" xs={6} sm={4} md={3}>
		    			<img alt="clientLogo" src={geeciLogo} className="clientClass clientAni3" />
		    		</Grid>
		    		<Grid item container justify="center" xs={6} sm={4} md={3}>
		    			<img alt="clientLogo" src={hotfmLogo} className="clientClass clientAni4" />
		    		</Grid>
		    		<Grid item container justify="center" xs={6} sm={4} md={3}>
		    			<img alt="clientLogo" src={mainoneLogo} className="clientClass clientAni5" />
		    		</Grid>
		    		<Grid item container justify="center" xs={6} sm={4} md={3}>
		    			<img alt="clientLogo" src={pavilionLogo} className="clientClass clientAni6" />
		    		</Grid>
		    		<Grid item container justify="center" xs={6} sm={4} md={3}>
		    			<img alt="clientLogo" src={projecttourLogo} className="clientClass clientAni7" />
		    		</Grid>
		    		<Grid item container justify="center" xs={6} sm={4} md={3}>
		    			<img alt="clientLogo" src={takeoutLogo} className="clientClass clientAni8" />
		    		</Grid>
		    	</Grid>
			</div>
	    ) : (
		    <div className="clientCont">
		    	<Grid container>
		    		<Grid item container justify="center" xs={6} sm={4} md={3}>
		    			<img alt="clientLogo" src={balloticsLogo} className="clientClass" />
		    		</Grid>
		    		<Grid item container justify="center" xs={6} sm={4} md={3}>
		    			<img alt="clientLogo" src={flexisafLogo} className="clientClass" />
		    		</Grid>
		    		<Grid item container justify="center" xs={6} sm={4} md={3}>
		    			<img alt="clientLogo" src={geeciLogo} className="clientClass" />
		    		</Grid>
		    		<Grid item container justify="center" xs={6} sm={4} md={3}>
		    			<img alt="clientLogo" src={hotfmLogo} className="clientClass" />
		    		</Grid>
		    		<Grid item container justify="center" xs={6} sm={4} md={3}>
		    			<img alt="clientLogo" src={mainoneLogo} className="clientClass" />
		    		</Grid>
		    		<Grid item container justify="center" xs={6} sm={4} md={3}>
		    			<img alt="clientLogo" src={pavilionLogo} className="clientClass" />
		    		</Grid>
		    		<Grid item container justify="center" xs={6} sm={4} md={3}>
		    			<img alt="clientLogo" src={projecttourLogo} className="clientClass" />
		    		</Grid>
		    		<Grid item container justify="center" xs={6} sm={4} md={3}>
		    			<img alt="clientLogo" src={takeoutLogo} className="clientClass" />
		    		</Grid>
		    	</Grid>
			</div>
	    );

    return <span>{compToTrack}</span>
};


class HomeClients extends Component {

	render() {

		const { classes } = this.props;

		return (
			<div style={{ overflow: 'hidden', width: '100%' }}>
			<div className={classes.clientBody}>
				<Grid container className={classes.gridCont}>
					<Typography variant="overline" className={classes.smallText} style={{ color: 'white' }}>our clients</Typography>
				</Grid>
				<Container fixed>
					<TrackVisibility once partialVisibility>
						<ComponentToTrack />
					</TrackVisibility>
				</Container>
			</div>
			</div>
		);
	}
}

export default withStyles(styles)(HomeClients);