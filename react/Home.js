import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import compose from 'recompose/compose';
import withWidth from '@material-ui/core/withWidth';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Panel from './Panel';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Sentence from './Sentence';
import Divider from '@material-ui/core/Divider';

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
    paddingTop: '50%',
  },
  substagram3: {
    height: '60px',
    width: 'auto',
    transform: 'translateY(6px)'
  },
  icon: {
    fontSize: 28,
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
    paddingTop: '50%',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '75%',
    }
  },
  invisible: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    }
  },
  visible: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    }
  },
  typo1: {
    fontFamily: 'Nunito Sans',
    fontWeight: 100,
    fontSize: 30,
    color: '#000000',
  },
  typo2: {
    fontFamily: 'Nunito Sans',
    fontWeight: 100,
    fontSize: 16,
    color: '#000000',
    [theme.breakpoints.down('sm')]: {
      fontSize: 14,
    },
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
  },
  typo3: {
    fontFamily: 'Nunito Sans',
    fontWeight: 100,
    fontSize: 16,
    color: '#000000',
    [theme.breakpoints.down('sm')]: {
      fontSize: 12,
    }
  },
  baseMargin: {
    marginTop: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 5,
  }
});
  
class Home extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      value: 0,
    };

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event, value) {
    this.setState({ value });
  };

  render() {
    const { classes, width } = this.props;
    const { value } = this.state;

    return (
      <Grid container alignItems='center' style={{maxWidth: '900px'}}>
        <Grid item xs={12} container direction='row' alignItems='center' justify={width == 'sm' || width == 'xs' ? 'space-between' : 'flex-start'}>
          <Grid container style={{width: 'fit-content'}}>
            <div className={classes.icon}>
              <i className={"fab fa-instagram"}></i>
            </div>
          </Grid>
          <Grid container style={{width: 'fit-content'}} className={classes.invisible}>
          <div className={classes.divideline}/>
          </Grid>
          <Grid container style={{width: 'fit-content'}}>
            <img className={classes.substagram3} src='/static/core/profile/substagram.png'/>
          </Grid>
          <Grid item xs={1}></Grid>
          {/* <Grid item xs={6} className={classes.substagram2}></Grid> */}
          {/* <Typography className={classes.substagram}>Substagram</Typography> */}
        </Grid>
        
        <Divider style={{backgroundColor: 'rgba(0,0,0,.0975)', width: '100%'}}/>

        <Grid item xs={12} className={classNames(classes.invisible, classes.baseMargin)} container direction='row' alignItems='center'>
          <Grid item xs={4} container justify='center'>
            <Grid item xs={6} className={classes.profile}></Grid>
          </Grid>
          <Grid item xs={8}>
            <Typography className={classes.typo1}>hyosubrmc</Typography>
            <Typography className={classes.typo2}>게시물 412 &emsp; 팔로워 1,565 &emsp; 팔로우 557</Typography>
            <Typography className={classes.typo3}><b>Hyosub Rmc</b><br/>
            REAL MARVELOUS CREW HYOSUB🇰🇷<br/>
            POPPING DANCE MUSIC LOVE⚡️🔥<br/>
            KOREAPOPPINGCREWBATTLE (KPCB) Director<br/>
            BACKTOTHEBASIC🔥>>MON.WED PM8:30~10:00문의
            </Typography>
          </Grid>
        </Grid>

        <Grid item xs={12} className={classes.visible} container direction='row' alignItems='center'>
          <Grid item xs={4} container justify='center'>
            <Grid item xs={9} className={classes.profile}></Grid>
          </Grid>
          <Grid item xs={8} container justify='flex-start'>
            <Typography className={classes.typo1}>hyosubrmc</Typography>
            <Grid item xs={4}>
              <Typography className={classes.typo2} align='center'>게시물<br/>412</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography className={classes.typo2} align='center'>팔로워<br/>1,565</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography className={classes.typo2} align='center'>팔로우<br/>557</Typography>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.typo3}><b>Hyosub Rmc</b><br/>
            REAL MARVELOUS CREW HYOSUB🇰🇷<br/>
            POPPING DANCE MUSIC LOVE⚡️🔥<br/>
            KOREAPOPPINGCREWBATTLE (KPCB) Director<br/>
            BACKTOTHEBASIC🔥MON.WED PM8:30~10:00문의
            </Typography>
          </Grid>
        </Grid>

        <Grid container justify='center'>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="사진첩" />
          <Tab label="한마디" />
        </Tabs>
        </Grid>
        {value == 0 &&
        <Grid item xs={12}>
          <Panel />
        </Grid>
        }
        {value == 1 &&
        <Grid item xs={12}>
          <Sentence/>
        </Grid>
        }
      </Grid>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(withStyles(styles, {withTheme: true}), withWidth())(Home);
