import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    
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
      <div>
        <TextField
          id="name"
          label="이름"
          value={this.state.name}
          onChange={e => this.handleChange(e, 'name')}
          margin="normal"
        />

        <TextField
          id="sentence"
          label="한마디"
          value={this.state.new_sentence}
          onChange={e => this.handleChange(e, 'new_sentence')}
          margin="normal"
        />

        <Button onClick={this.handleSubmit} disabled={loading_submit || name == '' || new_sentence == ''}>보내기</Button>

        <p>Sentences</p>
        {isLoaded && (
        sentences.map(sentence => (
          <p>{sentence.name} - {sentence.sentence}</p>
        ))
        )}
      </div>
    );
  }
}

Sentence.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(Sentence);
