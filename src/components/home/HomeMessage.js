import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import TrackVisibility from 'react-on-screen';

// Mui
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
	...theme.spreadThis,
	messageBody: {
		position: 'relative',
		width: '125%',
		right: '12.5%',
	  	background: '#262626',
		overflow: 'hidden',
		borderRadius: '50% 50% 0% 0% / 35% 35% 0% 0%',
		[theme.breakpoints.down('sm')]: {
			borderRadius: '50% 50% 0% 0% / 20% 20% 0% 0%'
		}
	},
	compBody: {
		padding: '0 3rem',
		[theme.breakpoints.up('sm')]: {
			padding: '0 5rem',
		},
		[theme.breakpoints.up('md')]: {
			width: '60%',
			margin: 'auto'
		}
	}
});

const ComponentToTrack = (props) => {
    const compToTrack = props.isVisible ? (
	    	<div className="messageText">
	    		<Typography className="messageAni1" variant="h4">
	    			<b>We develop enterprise-grade web & digital solutions for businesses.</b>
	    		</Typography>
	    		<Typography className="messageAni2" variant="subtitle1">
	    			<b>"Our process is very simple; we always ask our selves if we are doing the best work we can. Because we are commited to satisfying our clients on every project, and the only way we can achieve that is by doing great work."</b>
	    		</Typography>
	    		<Typography className="messageAni3" variant="h5"><b>Farooq Bello</b></Typography>
	    		<Typography className="messageAni4" variant="body2"><b>Director</b></Typography>
	    	</div>
	    ) : (
	    	<div className="messageText" style={{ opacity: 0 }}>
	    		<Typography variant="h4">
	    			We develop enterprise-grade web & digital solutions for businesses.
	    		</Typography>
	    		<Typography variant="subtitle1">
	    			<b>"Our process is very simple; we always ask our selves if we are doing the best work we can. Because we are commited to satisfying our clients on every project, and the only way we can achieve that is by doing great work."</b>
	    		</Typography>
	    		<Typography variant="h5">Abdulkarim Modibo</Typography>
	    		<Typography variant="body2">Founder</Typography>
	    	</div>
	    );

    return <span>{compToTrack}</span>
};


class HomeMessage extends Component {

	render() {

		const { classes } = this.props;

		return (
			<div style={{ overflow: 'hidden', width: '100%' }}>
				<div className={classes.messageBody}>
					<div className="messageAni">
						<TrackVisibility className={classes.compBody} once partialVisibility>
							<ComponentToTrack />
						</TrackVisibility>
					</div>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(HomeMessage);