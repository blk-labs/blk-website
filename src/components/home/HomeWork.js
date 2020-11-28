import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import phoneImg from '../../images/home-work/smartphone.svg';
import webImg from '../../images/home-work/webImg.svg';
import supportImg from '../../images/home-work/supportImg.svg';
import designImg from '../../images/home-work/designImg.svg';
import webApp from '../../images/home-work/webApp.svg';

// Material UI
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

// Carousel

import Carousel, { consts } from 'react-elastic-carousel';


const styles = (theme) => ({
	...theme.spreadThis,
	root: {
		backgroundColor: 'white',
		width: '100%',
	},
	titleText: {
		fontSize: '250%',
		margin: 'auto',
		paddingTop: '1.5rem',
		paddingBottom: '5rem',
		fontFamily: 'Roboto!important',
		fontWeight: 'bold',
	},
	rowImg: {
		width: 'auto',
		height: '75px',

	},
	rowText: {
		color: 'gray',
		width: '100%',
		fontFamily: 'MaisonNeue-Bold!important',
		fontSize: '150%',
		margin: '2rem 0',

	},
	gridCont: {
		paddingRight: '1.5rem'
	},
	mainText: {
		[theme.breakpoints.down('sm')]: {
			fontSize: '175%'
		}
	},
	gridText: {
		display: 'flex',
		padding: '5rem',
		alignContent: 'center',
		flexDirection: 'column',
		textAlign: 'center'
	},
	buttonCont: {
	    width: '100%',
	    padding: '5rem 0',
	    textDecoration: 'underline'
	}
});

class HomeWork extends Component {

	breakPoints = [
		{ width: 1, itemsToShow: 1 },
		{ width: 550, itemsToShow: 2 },
		{ width: 1150, itemsToShow: 3 },
	];

	render() {

		const { classes } = this.props;

		return (
			<div className={classes.root}>
			<Container>
				<Grid container className={classes.gridText}>
					<Typography variant="overline" className={classes.smallText}>our work</Typography>
					<Typography variant="h3" className={classes.mainText}>What we do</Typography>
				</Grid>
				<Grid container justify="center">
					<Carousel itemPosition={consts.START} breakPoints={this.breakPoints} showArrows={false} itemsToShow={3}>

						<Grid container className={classes.gridCont}>
							<div>
								<img alt="workIcon" src={designImg} className={classes.rowImg} />
							</div>
							<Typography variant="h5" className={classes.rowText}>
								UI/UX Design
							</Typography>
							<Typography variant="subtitle1">
								We work closely with our clients to wireframe, design, and sketch the most user friendly web and mobile applications
							</Typography>
						</Grid>
						<Grid container className={classes.gridCont}>
							<div>
								<img alt="workIcon" src={webImg} className={classes.rowImg} />
							</div>
							<Typography variant="h5" className={classes.rowText}>
								Web Development
							</Typography>
							<Typography variant="subtitle1">
								We collaborate with you to create high quality websites; from simple websites to online stores to CMS, we do it all.
							</Typography>
						</Grid>
						<Grid container className={classes.gridCont}>
							<div>
								<img alt="workIcon" src={webApp} className={classes.rowImg} />
							</div>
							<Typography variant="h5" className={classes.rowText}>
								Web Applications
							</Typography>
							<Typography variant="subtitle1">
								One development for all platforms. We develop with the most innovative technologies to create highly scalable web apps.
							</Typography>
						</Grid>
						<Grid container className={classes.gridCont}>
							<div>
								<img alt="workIcon" src={phoneImg} className={classes.rowImg} />
							</div>
							<Typography variant="h5" className={classes.rowText}>
								Mobile Applications
							</Typography>
							<Typography variant="subtitle1">
								We specialize in building high quality native mobile apps for Android and iOS that are interactive, engaging and fun.
							</Typography>
						</Grid>
						<Grid container className={classes.gridCont}>
							<div>
								<img alt="workIcon" src={supportImg} className={classes.rowImg} />
							</div>
							<Typography variant="h5" className={classes.rowText}>
								Support & Maintenance
							</Typography>
							<Typography variant="subtitle1">
								Our commitment doesn’t finish with the project’s end; we manage your digital product and we go with you beyond the delivery.
							</Typography>
						</Grid>

					</Carousel>

					<div className={classes.buttonCont}>
						<Button>
							<Link style={{ padding: '.5rem' }} to="/services" className="link-class">Services</Link>
						</Button>
					</div>
				</Grid>
			</Container>
			</div>
		);
	}
}

export default withStyles(styles)(HomeWork);