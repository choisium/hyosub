import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    
  });
  
class Panel extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      isLoaded: false,
      selected_now: "",
      panels: null,
      loading_submit: false,
      message: '',
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.fetchPanels = this.fetchPanels.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchPanels();
  }

  fetchPanels() {
    this.setState({isLoaded: false}, () => {
      $.ajax({
        method: "GET",
        url: "/api/panels/"
      }).done(data => {
        this.setState({
          isLoaded: true,
          panels: data,
        });
      }).fail(error => {
        this.setState({
          error: error.responseJSON.detail,
          isLoaded: true,
        });
      });
    });
  }

  // handleChange(event, state) {
  //   this.setState({ [state]: event.target.value });
  // };

  // handleSubmit() {
  //   const { name, new_sentence } = this.state;
  //   this.setState({ loading_submit: true });

  //   $.ajax({
  //     method: "POST",
  //     url: "/api/sentences/",
  //     data: {
  //       name: name,
  //       sentence: new_sentence,
  //     },
  //   }).done((data) => {
  //     this.setState({
  //       name: '',
  //       new_sentence: '',
  //       loading_submit: false,
  //     });
  //     this.fetchSentences()
  //   }).fail((error) => {
  //     const message = error.responseText.split('"')[1];
  //     this.setState({
  //       message: message,
  //     });
  //   });
  // }

  render() {
    const { } = this.props;
    const { isLoaded, selected_now, panels, loading_submit } = this.state;

    return (
      <div>
        {/* <TextField
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

        <Button onClick={this.handleSubmit} disabled={loading_submit || name == '' || new_sentence == ''}>보내기</Button> */}

        <p>Panels</p>
        {isLoaded && (
        panels.map(panel => (
          <img src={panel.image}/>
        ))
        )}
      </div>
    );
  }
}

Panel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(Panel);