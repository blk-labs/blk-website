import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

// Images
import { imgAndroid2x,
imgAngular2x,
imgBootstrap2x,
imgFirebase2x,
imgGatsby2x,
imgIonic2x,
imgIos2x,
imgMagento2x,
imgMongo,
imgSql2x,
imgNetlify2x,
imgNextjs,
imgNode2x,
imgPhp2x,
imgNative2x,
imgRedux2x,
imgVue2x,
imgWordpress2x
} from '../../images/home-tech';

// Material UI
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

// Tabs
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const styles = (theme) => ({
	...theme.spreadThis,
	tabListCont: {
		width: '100%',
		textAlign: 'center',
		padding: '0',
	},
	tabText: {
		fontSize: '75%',
		[theme.breakpoints.up('sm')]: {
			fontSize: 'initial',
			margin: 'auto 1rem'
		}
	},
	imgCont: {
		width: '75%',
		display: 'none',
		textAlign: 'center',
		margin: 'auto',
		padding: '1rem 0'
	},
	imgBody: {
		textAlign: 'center',
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column'
	},
	imgClass: {
		width: '50px',
		height: '50px',
		filter: 'grayscale(1)',
		margin: '2rem 3rem 0',
		padding: '1rem 0',
		cursor: 'pointer'
	},
	mainText: {
		[theme.breakpoints.down('sm')]: {
			fontSize: '175%'
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

class HomeStack extends Component {

	render() {

		const { classes } = this.props;

		return (
			<Container>
				<Grid container className={classes.gridCont}>
					<Typography variant="overline" className={classes.smallText}>our stack</Typography>
					<Typography variant="h3" className={classes.mainText}>Technologies we work with</Typography>
				</Grid>
				<Tabs>
					<TabList className={classes.tabListCont}>
						<Tab>
							<Typography className={classes.tabText} variant="subtitle2">Front End</Typography>
						</Tab>
						<Tab>
							<Typography className={classes.tabText} variant="subtitle2">Back End</Typography>
						</Tab>
						<Tab>
							<Typography className={classes.tabText} variant="subtitle2">Mobile</Typography>
						</Tab>
						<Tab>
							<Typography className={classes.tabText} variant="subtitle2">Databse</Typography>
						</Tab>
						<Tab>
							<Typography className={classes.tabText} variant="subtitle2">CMS</Typography>
						</Tab>
					</TabList>

					<TabPanel className={classes.imgCont}>
						<Grid container justify='center'>
							<Grid item xs={6} sm={4} md={2} className={classes.imgBody}>
								<img alt="stackLogo" src={imgNative2x} className={classes.imgClass} />
								<Typography variant="overline">react</Typography>
							</Grid>
							<Grid item xs={6} sm={4} md={2} className={classes.imgBody}>
								<img alt="stackLogo" src={imgAngular2x} className={classes.imgClass} />
								<Typography variant="overline">angular</Typography>
							</Grid>
							<Grid item xs={6} sm={4} md={2} className={classes.imgBody}>
								<img alt="stackLogo" src={imgVue2x} className={classes.imgClass} />
								<Typography variant="overline">vue</Typography>
							</Grid>
							<Grid item xs={6} sm={4} md={2} className={classes.imgBody}>
								<img alt="stackLogo" src={imgBootstrap2x} className={classes.imgClass} />
								<Typography variant="overline">bootstrap</Typography>
							</Grid>
							<Grid item xs={6} sm={4} md={2} className={classes.imgBody}>
								<img alt="stackLogo" src={imgNextjs} className={classes.imgClass} />
								<Typography variant="overline">next.js</Typography>
							</Grid>
							<Grid item xs={6} sm={4} md={2} className={classes.imgBody}>
								<img alt="stackLogo" src={imgGatsby2x} className={classes.imgClass} />
								<Typography variant="overline">gatsby</Typography>
							</Grid>
							<Grid item xs={6} sm={4} md={2} className={classes.imgBody}>
								<img alt="stackLogo" src={imgRedux2x} className={classes.imgClass} />
								<Typography variant="overline">redux</Typography>
							</Grid>
						</Grid>
					</TabPanel>

					<TabPanel className={classes.imgCont}>
						<Grid container justify='center'>
							<Grid item xs={6} sm={4} md={2} className={classes.imgBody}>
								<img alt="stackLogo" src={imgPhp2x} className={classes.imgClass} />
								<Typography variant="overline">php</Typography>
							</Grid>
							<Grid item xs={6} sm={4} md={2} className={classes.imgBody}>
								<img alt="stackLogo" src={imgNode2x} className={classes.imgClass} />
								<Typography variant="overline">node.js</Typography>
							</Grid>
							<Grid item xs={6} sm={4} md={2} className={classes.imgBody}>
								<img alt="stackLogo" src={imgNetlify2x} className={classes.imgClass} />
								<Typography variant="overline">netlify</Typography>
							</Grid>
						</Grid>
					</TabPanel>

					<TabPanel className={classes.imgCont}>
						<Grid container justify='center'>
							<Grid item xs={6} sm={4} md={2} className={classes.imgBody}>
								<img alt="stackLogo" src={imgAndroid2x} className={classes.imgClass} />
								<Typography variant="overline">andrioid</Typography>
							</Grid>
							<Grid item xs={6} sm={4} md={2} className={classes.imgBody}>
								<img alt="stackLogo" src={imgIos2x} className={classes.imgClass} />
								<Typography variant="overline">ios</Typography>
							</Grid>
							<Grid item xs={6} sm={4} md={2} className={classes.imgBody}>
								<img alt="stackLogo" src={imgNative2x} className={classes.imgClass} />
								<Typography variant="overline">native</Typography>
							</Grid>
							<Grid item xs={6} sm={4} md={2} className={classes.imgBody}>
								<img alt="stackLogo" src={imgIonic2x} className={classes.imgClass} />
								<Typography variant="overline">ionic</Typography>
							</Grid>
						</Grid>
					</TabPanel>

					<TabPanel className={classes.imgCont}>
						<Grid container justify='center'>
							<Grid item xs={6} sm={4} md={2} className={classes.imgBody}>
								<img alt="stackLogo" src={imgSql2x} className={classes.imgClass} />
								<Typography variant="overline">mysql</Typography>
							</Grid>
							<Grid item xs={6} sm={4} md={2} className={classes.imgBody}>
								<img alt="stackLogo" src={imgMongo} className={classes.imgClass} />
								<Typography variant="overline">mongo db</Typography>
							</Grid>
							<Grid item xs={6} sm={4} md={2} className={classes.imgBody}>
								<img alt="stackLogo" src={imgFirebase2x} className={classes.imgClass} />
								<Typography variant="overline">firebase</Typography>
							</Grid>
						</Grid>
					</TabPanel>

					<TabPanel className={classes.imgCont}>
						<Grid container justify='center'>
							<Grid item xs={6} sm={4} md={2} className={classes.imgBody}>
								<img alt="stackLogo" src={imgWordpress2x} className={classes.imgClass} />
								<Typography variant="overline">wordpress</Typography>
							</Grid>
							<Grid item xs={6} sm={4} md={2} className={classes.imgBody}>
								<img alt="stackLogo" src={imgMagento2x} className={classes.imgClass} />
								<Typography variant="overline">magento</Typography>
							</Grid>
						</Grid>
					</TabPanel>
				</Tabs>
			</Container>
		)
	}
};

export default withStyles(styles)(HomeStack);