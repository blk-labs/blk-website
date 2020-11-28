import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import mapImg from '../images/locationMap.png'
import mapLogo from '../images/blk-logoDark.png'

// Icons
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import PhoneEnabledOutlinedIcon from '@material-ui/icons/PhoneEnabledOutlined';

// Mui
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';



const styles = (theme) => ({
  ...theme.spreadThis,
  contactCont: {
    padding: '10% 5% 5%',
    [theme.breakpoints.down('sm')]: {
      padding: '20% 10% 10%',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '33.3% 10% 16%',
    },
  },
  contactGrid: {
    minHeight: '75vh'
  },
  mainText: {
    fontWeight: 'bold',
    margin: '0',
    [theme.breakpoints.down('sm')]: {
      fontSize: '200%',
    }
  },
  contactText: {
    margin: '5% .5%',
    fontSize: '95%',
    color: 'gray',
    [theme.breakpoints.up('md')]: {
      fontSize: '125%',
      width: '66.6%'
    }
  },
  contactDetails: {
    padding: '2rem 0'
  },
  detailsItem: {
    marginBottom: '1rem'
  },
  aClass: {
    textDecoration: 'none',
    color: 'black',
    '&:hover': {
      textDecoration: 'underline',
    }
  },
  imgCont: {
    marginTop: 'auto',
    position: 'relative',
  },
  imgClass: {
    height: 'auto',
    width: '100%',
    border: '1px solid rgba(0,0,0,.05)'
  },
  imgLogo: {
    position: 'absolute',
    top: '0',
    bottom: '0',
    right: '0',
    left: '0',
    margin: 'auto',
    height: '2.5rem',
    width: '2.5rem',
    backgroundImage: `url(${mapLogo})`,
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    borderRadius: '50%',
    zIndex: '100',
  },
  logoAni: {
    position: 'absolute',
    top: '0',
    bottom: '0',
    right: '0',
    left: '0',
    margin: 'auto',
    height: '2.5rem',
    width: '2.5rem',
    borderRadius: '50%',
    background: 'rgba(0,0,0,.25)',
    animationName: 'logoAnimate',
    animationDuration: '2s',
    animationIterationCount: 'infinite',
  }
});

class Contact extends Component {

  render() {

    const { classes } = this.props;

    const details = [
      {title: 'working hours', item: 'Monday - Friday\n8AM - 6PM', icon: <AccessTimeIcon style={{ color: 'gray' }} />},
      {title: 'contact us', type: 'mail', item: 'hello@blklabs.co', icon: <MailOutlinedIcon style={{ color: 'gray' }} />},
      {title: 'customer support', type: 'mail', item: 'support@blklabs.co', icon: <MailOutlinedIcon style={{ color: 'gray' }} />},
      {title: 'call us', type: 'phone', item: '(+234) 907 866 9414', icon: <PhoneEnabledOutlinedIcon style={{ color: 'gray' }} />},
    ]

    const contactDetails = (
      <Grid container justify="space-between" className={classes.contactDetails}>
        <Grid item md={6}>
        {
          details.map((det, index) => (
            <div key={index} style={{ marginBottom: `${(details.length - 1) === index ? '5rem' : ""}` }} className={classes.detailsItem}>
              <Typography variant="overline" style={{ fontWeight: 'bold', color: 'gray' }}>{det.title}</Typography>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {det.icon}
                <Typography style={{ marginLeft: '.5rem' }} variant="body1">
                  {det.type !== undefined ? (
                    det.type !== 'mail' ?
                    <a className={classes.aClass} href={`tel:${det.item}`}>{det.item}</a>
                    : <a className={classes.aClass} href={`mailto:${det.item}`}>{det.item}</a>
                    ) : (det.item)
                  }
                </Typography>
              </div>
            </div>
          ))
        }
        </Grid>
        <Grid item md={6}>
          <Typography variant="overline" style={{ fontWeight: 'bold', color: 'gray' }}>HEAD OFFICE</Typography>
          <Typography variant="h6">
            Zone 5, Wuse<br />
            Federal Capital Territory Abuja<br />
            Nigeria
          </Typography>
        </Grid>
      </Grid>
      );

    return (
      <Container maxWidth="lg" className={classes.contactCont}>
        <Grid container className={classes.contactGrid}>
          <Grid item md={8}>
            <Typography variant="h3" className={classes.mainText}>Hello!</Typography>
            <Typography variant="h6" className={classes.contactText}>Talk to us, we'd love to hear about you and the solutions we can offer your business.</Typography>
            {contactDetails}
          </Grid>
          <Grid item sm={10} md={4} style={{ display: 'flex', margin:'0 auto' }}>
            <a href="https://www.google.com/maps/@9.0601253,7.4535333,17z" target="_blank" rel="noopener noreferrer" className={classes.imgCont}>
              <div className={classes.imgLogo}></div>
              <div className={classes.logoAni}></div>
              <img src={mapImg} className={classes.imgClass} alt="location" /></a>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default withStyles(styles)(Contact);