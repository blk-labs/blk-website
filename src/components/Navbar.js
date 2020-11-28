import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/blk-logoDark.png'
import withStyles from '@material-ui/core/styles/withStyles';

// Comps
import MobileNav from './MobileNav';

// Material
import Container from '@material-ui/core/Container';

const styles = (theme) => ({
	...theme.spreadThis,
	navClass: {
		position: 'fixed',
		display: 'flex',
		padding: '1rem 0',
		width: '100%',
		zIndex: '10'
	},
	navText: {
		color: 'white',
		display: 'flex',
		justifyContent: 'flex-end',
		listStyle: 'none',
		fontSize: '1.25rem'
	},
	listClass: {
		margin: 'auto 2rem',
	}
});

class Navbar extends Component {

	state = {
		scrolled: true
	}

	componentDidMount() {
	    window.addEventListener('scroll', this.handleScroll);
	};

	handleScroll = () => {

		let elLogo = document.getElementById('navLogo');
		let elImg = document.getElementById('navImg');
		let scrollTop = window.scrollY

		if (scrollTop > 50) {
			if (this.state.scrolled === true) {
				elLogo.classList.add("scrollAnimate");
				elImg.classList.add("scrollImg");
			};
			this.setState({
				scrolled: false
			});
		}

		if (scrollTop < 50) {
			if (this.state.scrolled === false) {
				elLogo.classList.remove("scrollAnimate");
				elImg.classList.remove("scrollImg");
			};
			this.setState({
				scrolled: true
			});
		}
	};

	componentWillUnmount() {
	    window.removeEventListener('scroll', this.handleScroll);
	};

	render() {

		const { classes } = this.props;

		return (
			<div id="navClass" className={classes.navClass}>
				<Container style={{ width: 'fit-content' }} maxWidth="lg">
					<div style={{ display: 'flex' }}>
						<Link id="navLogo" to="/" className="link-class">
							<p className="logoClass">BLK LABS</p>
						</Link>
						<Link to="/" id="navImg" className="link-class">
							<img src={logo} className="navImg" alt=""/>
							</Link>
					</div>
				</Container>
				<Container maxWidth="lg">
					<MobileNav />
				</Container>
			</div>
		);
	}
}

export default withStyles(styles)(Navbar);