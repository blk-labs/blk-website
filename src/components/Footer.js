import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faMediumM } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

// Mui
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const styles = (theme) => ({
	...theme.spreadThis,
	footerCont: {
		padding: '2.5rem 0 1.5rem',
		display: 'flex',
		alignItems: 'center',
		[theme.breakpoints.down('sm')]: {
			display: 'block'
		}
	},
	menuCont: {
		display: 'flex',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column'
		}
	},
	linkClass: {
		color: 'inherit!important',
		textDecoration: 'none!important',
		margin: 'auto',
		marginLeft: '4rem',
		[theme.breakpoints.down('sm')]: {
			marginLeft: '0rem',
			marginBottom: '1rem!important'
		}
	},
	iconWrapper: {
		margin: 'auto 1.5rem auto 0',
		width: '3rem!important',
		height: '3rem!important',
		display: 'flex',
		borderRadius: '50%',
		backgroundColor: 'rgba(0,0,0,.15)',
		alignItems: 'center',
		justifyContent: 'center',
		transition: '.5s',
		[theme.breakpoints.down('sm')]: {
			marginTop: '2rem'
		},
		'&:hover': {
			transform: 'scale(1.25)',
			backgroundColor: 'rgba(0,0,0,.25)',
			transition: '.5s'
		},
	},
	iconCont: {
		marginLeft: 'auto',
		display: 'flex',
		alignItems: 'center'
	},
	hrClass: {
		borderColor: 'rgba(0,0,0,.05)'
	},
	footNote: {
		color: 'gray',
		padding: '1rem 0'
	},
  contactBody: {
    paddingTop: '.5rem',
    animationName: 'colorChange',
    animationDuration: '10s',
    animationIterationCount: 'infinite',
    position: 'relative',
    background: '#262626',
    overflow: 'hidden',
  },
});

class Footer extends Component {

	render() {

		const { classes } = this.props;

		return (
			<Grid className={classes.contactBody}>
        <div style={{ background: 'white', padding: '0 12.5%' }}>
				<Grid className={classes.footerCont}>
					<Link to="/" className="link-class">
						<p id="navLogo" className="logoClass">BLK LABS</p>
					</Link>
					<div className={classes.menuCont}>
						<Link to="/services" className={classes.linkClass}>
							<Typography variant="overline">Services</Typography>
						</Link>
						<Link to="/about" className={classes.linkClass}>
							<Typography variant="overline">About</Typography>
						</Link>
						<Link to="/contact" className={classes.linkClass}>
							<Typography variant="overline">Contact</Typography>
						</Link>
					</div>
					<div className={classes.iconCont}>
				    <span className={classes.iconWrapper}>
              <a target="_blank" rel="noopener noreferrer" className={classes.refClass} href="https://www.linkedin.com/company/blk-labs/">
							  <FontAwesomeIcon color="#262626" size="lg" icon={faLinkedinIn} />
              </a>
					  </span>
				    <span className={classes.iconWrapper}>
              <a target="_blank" rel="noopener noreferrer" className={classes.refClass} href="http://medium.com/@blklabs">
							  <FontAwesomeIcon color="#262626" size="lg" icon={faMediumM} />
              </a>
					  </span>
				    <span className={classes.iconWrapper}>
              <a target="_blank" rel="noopener noreferrer" className={classes.refClass} href="https://www.instagram.com/blk_labs/">
							  <FontAwesomeIcon color="#262626" size="lg" icon={faInstagram} />
              </a>
					  </span>
					</div>
				</Grid>
				<hr className={classes.hrClass} />
				<Grid className={classes.footNote}>
					<Typography variant="caption">© 2020 BLK Labs. All rights reserved. Legal notice and privacy policy. <Link to="/terms">Terms and Conditions</Link> </Typography>
				</Grid>
        </div>
			</Grid>
		);
	}
}

export default withStyles(styles)(Footer);