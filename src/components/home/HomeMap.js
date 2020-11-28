import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import mapImg from '../../images/home-map/mapAlt.PNG';

// Mui
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';


const styles = (theme) => ({
	...theme.spreadThis,
	cont: {
		margin: '5rem auto',
		borderRadius: '10px',
		background: 'rgba(0,0,0,.1)'
	},
	gridCont: {
		display: 'flex',
		alignContent: 'center',
		flexDirection: 'column',
		textAlign: 'center',
		padding: '1rem',
		[theme.breakpoints.up('sm')]: {
			padding: '5rem'
		}
	},
	mainText: {
		[theme.breakpoints.down('sm')]: {
			fontSize: '175%'
		}
	},
	mapClass: {
		filter: 'drop-shadow(2px 4px 6px black)',
		marginTop: '2.5rem',
		height: 'auto',
		width: '55%',
		[theme.breakpoints.down('sm')]: {
			width: '100%',
		}
	},
	smDot: {
		width: '.75rem',
		height: '.75rem',
		borderRadius:'50%',
		backgroundColor: 'white',
		position: 'absolute',
		top: '0%',
		left: '0%',
		opacity: '0',
		animationName:' dotAnimation',
		animationIterationCount:' infinite',
		animationDuration:' 3s',
		[theme.breakpoints.down('sm')]: {
			top: '-25%',
			left: '-25%'
		}
	},
	aniDot1: {
		top: '55%',
		left: '42.5%',
		[theme.breakpoints.down('sm')]: {
			left: '36%',
			width: '.5rem',
			height: '.5rem'
		}
	},
	aniDot2: {
		top: '75%',
		left: '26%',
		[theme.breakpoints.down('sm')]: {
			left: '7.5%',
			width: '.5rem',
			height: '.5rem'
		}
	},
	aniDot3: {
		top: '40%',
		left: '45%',
		[theme.breakpoints.down('sm')]: {
			left: '39%',
			width: '.5rem',
			height: '.5rem'
		}
	},
	aniDot4: {
		top: '25%',
		left: '70%',
		[theme.breakpoints.down('sm')]: {
			left: '87.5%',
			width: '.5rem',
			height: '.5rem'
		}
	},
	aniDot5: {
		top: '92.5%',
		left: '40%',
		[theme.breakpoints.down('sm')]: {
			left: '33%',
			width: '.5rem',
			height: '.5rem'
		}
	}
});


class HomeMap extends Component {

	render() {

		const { classes } = this.props;

		return (
			<Container className={classes.cont} maxWidth="lg">
				<Grid container className={classes.gridCont}>
					<Typography variant="overline" className={classes.smallText}>our team</Typography>
					<Typography variant="h3" className={classes.mainText}>Different locations, in sync</Typography>
					<div style={{ position: 'relative' }}>
						<img src={mapImg} alt="map" className={classes.mapClass} />
						<span className={`${classes.aniDot1} aniDot`}>
							<span className={classes.smDot}></span>
						</span>
						<span className={`${classes.aniDot2} aniDot`}>
							<span className={classes.smDot}></span>
						</span>
						<span className={`${classes.aniDot3} aniDot`}>
							<span className={classes.smDot}></span>
						</span>
						<span className={`${classes.aniDot4} aniDot`}>
							<span className={classes.smDot}></span>
						</span>
						<span className={`${classes.aniDot5} aniDot`}>
							<span className={classes.smDot}></span>
						</span>
					</div>
				</Grid>
			</Container>
		);
	}
}

export default withStyles(styles)(HomeMap);