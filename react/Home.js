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
    fontFamily: "billabong",
    fontSize: 28,
    fontWeight: 100,
    color: '#000000',
    transform: 'translateY(-4px)'
  },
  icon: {
    fontSize: 'xx-large',
  },
  divideline: {
    height: '28px',
    width: '1px',
    background: '#262626',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
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
          <Typography className={classes.substagram}>Substagram</Typography>
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
