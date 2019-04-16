import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  comment: {
    fontFamily: 'Nunito Sans',
    fontWeight: 100,
    color: '#000000',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  });
  
class Sentence extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      isLoaded: false,
      name: "",
      new_sentence: "",
      sentences: null,
      loading_submit: false,
      message: '',
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.fetchSentences = this.fetchSentences.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchSentences();
  }

  fetchSentences() {
    this.setState({isLoaded: false}, () => {
      $.ajax({
        method: "GET",
        url: "/api/sentences/"
      }).done(data => {
        this.setState({
          isLoaded: true,
          sentences: data,
        });
      }).fail(error => {
        this.setState({
          error: error.responseJSON.detail,
          isLoaded: true,
        });
      });
    });
  }

  handleChange(event, state) {
    this.setState({ [state]: event.target.value });
  };

  handleSubmit() {
    const { name, new_sentence } = this.state;
    this.setState({ loading_submit: true });

    $.ajax({
      method: "POST",
      url: "/api/sentences/",
      data: {
        name: name,
        sentence: new_sentence,
      },
    }).done((data) => {
      this.setState({
        name: '',
        new_sentence: '',
        loading_submit: false,
      });
      this.fetchSentences()
    }).fail((error) => {
      const message = error.responseText.split('"')[1];
      this.setState({
        message: message,
      });
    });
  }

  render() {
    const { classes } = this.props;
    const { isLoaded, name, new_sentence, sentences, loading_submit } = this.state;

    return (
      <Grid container style={{width: '100%'}} justify='center'>
      <Grid container direction='column' justify='center' alignItems='center' style={{maxWidth: '600px'}}>
        
        {isLoaded && (
        sentences.map(sentence => (
          <Grid container justify='center' alignItems='center' style={{marginBottom: '10px'}}>
            <Typography className={classes.comment}>{sentence.sentence}</Typography>
            <Typography className={classes.comment}>- {sentence.name} -</Typography>
          </Grid>
        ))
        )}
        <Grid container justify='center' alignItems='center'>
        <TextField
          id="name"
          label="이름"
          value={this.state.name}
          onChange={e => this.handleChange(e, 'name')}
          margin="normal"
          variant='outlined'
          style={{width: '80px', marginRight: '5px'}}
        />

        <TextField
          id="comment"
          label="남길 말"
          value={this.state.new_sentence}
          onChange={e => this.handleChange(e, 'new_sentence')}
          margin="normal"
          variant='outlined'
          style={{maxWidth: '500px', marginRight: '5px'}}
        />

        <Button onClick={this.handleSubmit} disabled={loading_submit || name == '' || new_sentence == ''} style={{width: '80px'}}>저장</Button>
        </Grid>
        
      </Grid>
      </Grid>
    );
  }
}

Sentence.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(Sentence);
