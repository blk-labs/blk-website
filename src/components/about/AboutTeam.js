import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

// material
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// Other
import { team1, team2, team3, team4, team5, team6, team7, team8, team9 } from '../../images/about-team'

const styles = (theme) => ({
  ...theme.spreadThis,
  imgCont: {
    display: 'flex',
    borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
    overflow: 'hidden',
    margin: '5rem 4rem 2rem'
  },
  teamClass: {
    height: 'auto',
    width: '100%',
  }
});

class AboutTeam extends React.Component {

  render() {

    const imgArray = [
      {img: team1, name: 'Farooq Bello', title: 'Director'},
      {img: team2, name: 'Abdulaziz Ladan', title: 'Developer'},
      {img: team3, name: 'Kabir Gafai', title: 'Developer'},
      {img: team4, name: 'Godsent Olie', title: 'Developer'},
      {img: team5, name: 'Abdulrazak Abilagbo', title: 'Developer'},
      {img: team6, name: 'Jessica Uzor', title: 'UI Designer'},
      {img: team7, name: 'Abdulkarim Modibbo', title: 'UI Designer'},
      {img: team8, name: 'Ibrahim Usman', title: 'Support'},
      {img: team9, name: 'Adeola Adebayo', title: 'Support'}
     ];
    const { classes } = this.props;

    return (
      <div>
        <Grid container item md={9} justify="center" style={{ margin: 'auto', paddingBottom: '10%' }}>
          {
            imgArray.map((team, index) => (
              <Grid key={index} item xs={12} sm={6} lg={4} style={{ textAlign: 'center' }}>
                <Grid item className={classes.imgCont}>
                  <img src={team.img} alt="teamImg" className={classes.teamClass} />
                </Grid>
                <Typography style={{ fontWeight: 'bold' }} variant="h6">{team.name}</Typography>
                <Typography variant="overline">{team.title}</Typography>
              </Grid>
            ))
          }
          </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(AboutTeam);