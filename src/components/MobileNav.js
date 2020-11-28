import React from 'react';
import { Link } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';

// Mui
import Drawer from '@material-ui/core/Drawer';
import Container from '@material-ui/core/Container';

const drawerWidth = '100%';

const styles = (theme) => ({
    ...theme.spreadThis,
  root: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  drawerPaper: {
    width: drawerWidth,
  },
  circleNav: {
  	boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px',
  	marginTop: '.5rem',
  	borderRadius: '50%',
  	background: 'black',
  	height: '3rem',
  	width: '3rem',
    display: 'flex',
    cursor: 'pointer',
    flexDirection: 'column',
    justifyContent: 'center',
    transition: '.25s',
    '&:hover': {
      transform: 'scale(1.1)',
    }
  },
  drawer: {
  	display: 'flex'
  },
  closeBtn: {
  	justifyContent: 'flex-end',
    cursor: 'pointer',
  	marginLeft: 'auto',
    transition: '.25s',
    '&:hover': {
      transform: 'scale(1.1)',
    }
  },
  closeCont: {
  	padding: '.75rem',
  	display: 'flex',
  	alignItems: 'center',
  	justifyContent: 'center',
  	background: 'black',
  	height: '1rem',
  	width: '1rem',
  	borderRadius: '50%',
  	color: 'white',
  	boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px'
  },
  closeText: {
    display: 'flex',
    paddingTop: '.33rem',
    fontSize: '2rem'
  },
	navText: {
		listStyle: 'none',
		padding: 0,
		margin: '5rem auto',
    [theme.breakpoints.up('sm')]: {
      width: 'fit-content'
    }
	},
	listClass: {
		fontSize: '1.5rem',
		fontFamily: 'MaisonNeue-Bold',
		padding: '.75rem 0'
	},
  refClass: {
    color: 'black',
    textDecoration: 'none',
  },
	footerClass: {
		padding: '.75rem 0'
	}
});

function MobileNav(props) {

  const { classes, container } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerTop = (
    <div>
    	<div className={classes.drawer}>
	  		<Link to="/" className="link-class" onClick={handleDrawerToggle}>
          <p className="logoClass">BLK LABS</p>
        </Link>
	  		<div className={classes.closeBtn} boxshadow={3} onClick={handleDrawerToggle}>
	  			<p className={classes.closeCont}><span className={classes.closeText}>&times;</span></p>
	  		</div>
  		</div>
      <div className={classes.drawerCont}>
    		<div>
    			<ul className={classes.navText}>
            <li className={classes.listClass} onClick={handleDrawerToggle}>
              <Link to="/" className="link-class">home</Link>
            </li>
            <li className={classes.listClass} onClick={handleDrawerToggle}>
      				<Link to="/services" className="link-class">services</Link>
            </li>
            <li className={classes.listClass} onClick={handleDrawerToggle}>
              <Link to="/about" className="link-class">about</Link>
            </li>
            <li className={classes.listClass} onClick={handleDrawerToggle}>
              <Link to="/contact" className="link-class">contact</Link>
            </li>
    			</ul>
    		</div>
    		<div>
    			<ul className={classes.navText}>
  				<li className={classes.footerClass}>
            <a target="_blank" rel="noopener noreferrer" className={classes.refClass} href="https://www.linkedin.com/company/blk-labs/">LinkedIn</a>
          </li>
  				<li className={classes.footerClass}>
            <a target="_blank" rel="noopener noreferrer" className={classes.refClass} href="http://medium.com/@blklabs">Medium</a>
          </li>
  				<li className={classes.footerClass}>
            <a target="_blank" rel="noopener noreferrer" className={classes.refClass} href="https://www.instagram.com/blk_labs/">Instagram</a>
          </li>
  			</ul>
    		</div>
      </div>
    </div>
  );

  return (
    <div className={classes.root}>
		<div className={classes.circleNav} onClick={handleDrawerToggle}>
      <div className="lineLong"></div>
      <div className="lineShort"></div>
      <div className="lineLong"></div>
		</div>
      	<nav>
		    <Drawer
		        container={container}
		        variant="temporary"
		        anchor='right'
		        open={mobileOpen}
		        onClose={handleDrawerToggle}
		        classes={{
		          paper: classes.drawerPaper,
		        }}
		        ModalProps={{
		          keepMounted: true,
		        }}
		      >
		      	<Container>
		        	{drawerTop}
		        </Container>
		    </Drawer>
      	</nav>
    </div>
  );
}

MobileNav.propTypes = {
  container: PropTypes.any
};

export default withStyles(styles)(MobileNav);