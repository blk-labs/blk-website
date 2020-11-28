import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import TrackVisibility from 'react-on-screen';

// Mui
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';


const styles = (theme) => ({
	...theme.spreadThis,
	textCont: {
		margin: 'auto',
		width: '40%',
		textAlign: 'center',
		marginBottom: '7.5rem',
		[theme.breakpoints.down('sm')]: {
			width: '80%',
		}
	},
	contactCont: {
		padding: '7.5rem 0rem',
		display: 'flex',
		width: '100%',
		margin: 'auto',
		[theme.breakpoints.down('md')]: {
			width: '75%'
		},
		[theme.breakpoints.down('sm')]: {
			display: 'block',
		},
		[theme.breakpoints.down('xs')]: {
			display: 'block'
		},
	},
	contactGrid: {
		width: '125%',
		right: '12.5%',
		position: 'relative',
		background: '#262626',
		overflow: 'hidden',
		borderRadius: '50% 50% 0% 0% / 50% 50% 0% 0%',
	},
});

const ComponentToTrack = (props) => {
	const compToTrack = props.isVisible ? (
		<Fragment>
  		<Typography variant="h4" className="bottomAni1 btmText">Lets start your next project together</Typography>
      <Link to="/contact" className="link-class">
	  	  <Button className="bottomAni2 btnCont" size="large" variant="contained">
          Contact
        </Button>
      </Link>
		</Fragment>
		) : (
    <span style={{ opacity: 0 }}>
      <Typography variant="h4" className="bottomAni1 btmText">Lets start your next project together</Typography>
      <Link to="/contact" className="link-class">
        <Button className="bottomAni2 btnCont" size="large" variant="contained">
          Contact
        </Button>
      </Link>
    </span>
    );

		return <Fragment>{compToTrack}</Fragment>
	};

	class Bottom extends Component {

		render() {

			const { classes } = this.props;

      const text = this.props.text === true ? (
        <div className={classes.textCont}>
            <Typography variant="h5">Interested? We would love to hear from you and offer our solutions for your business.</Typography>
          </div>
        ) : null;

			return (
				<div style={{ overflow: 'hidden', width: '100%' }}>
          {text}
  				<Grid className={classes.contactGrid}>
    				<div style={{ background: '#262626', width: '100%' }}>
      				<Container maxWidth="lg">
        				<TrackVisibility className={classes.contactCont} once partialVisibility>
        				  <ComponentToTrack />
        				</TrackVisibility>
      				</Container>
    				</div>
  				</Grid>
				</div>
				);
		}
	}

	export default withStyles(styles)(Bottom);