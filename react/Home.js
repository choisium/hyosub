import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Panel from './Panel';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
  substagram: {
    fontFamily: "Billabong",
    fontSize: 28,
    fontWeight: 100,
    color: '#000000',
    // transform: 'translateY(-4px)'
  },
  substagram2: {
    backgroundIamge: "url('/static/core/profile/hyosub_profile.png')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    paddingTop: '50%'
  },
  substagram3: {
    height: '60px',
    width: 'auto',
    transform: 'translateY(5px)'
  },
  icon: {
    fontSize: 'xx-large',
  },
  divideline: {
    height: '28px',
    width: '1px',
    background: '#262626',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 0,
  },
  profile: {
    borderRadius: 300,
    backgroundImage: "url('/static/core/profile/hyosub_profile.png')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    paddingTop: '50%'
  }
});
  
class Home extends React.Component {
  constructor(props){
    super(props);

    this.state = {
    };
  }

  render() {
    const { classes } = this.props;
    const {  } = this.state;

    return (
      <Grid container alignItems='center' style={{maxWidth: '900px'}}>
        <Grid item xs={12} container direction='row' alignItems='center'>
          <div style={{fontSize: 28}}>
            <i className="fab fa-instagram"></i>
          </div>
          <div className={classes.divideline}/>
          <img className={classes.substagram3} src='/static/core/profile/substagram.png'/>
          {/* <Grid item xs={6} className={classes.substagram2}></Grid> */}
          {/* <Typography className={classes.substagram}>Substagram</Typography> */}
        </Grid>

        <Grid item xs={12} container direction='row' alignItems='center'>
          <Grid item xs={4} container justify='center'>
            <Grid item xs={6} className={classes.profile}></Grid>
          </Grid>
          <Grid item xs={8}>
            <Typography>hyosubrmc</Typography>
            <Typography>게시물 412 팔로워 1,565 팔로우 557</Typography>
            <Typography>Hyosub Rmc<br/>
            REAL MARVELOUS CREW HYOSUB🇰🇷<br/>
            POPPING DANCE MUSIC LOVE⚡️🔥<br/>
            KOREAPOPPINGCREWBATTLE (KPCB) Director<br/>
            BACKTOTHEBASIC🔥MON.WED PM8:30~10:00문의
            </Typography>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Panel/>
        </Grid>
      </Grid>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(Home);
