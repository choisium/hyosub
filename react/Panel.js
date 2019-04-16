import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = theme => ({
  image: {
    maxWidth: '100%',
  },
  pane: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    paddingTop: '33.3333%'
    // style={{backgroundImage: 'url("'+panel.image+'")', paddingTop: '33.333333%'}} className={classes.pane}
  },
  card: {
    width: '100%',
    paddingTop: '100%',
  }
  });
  
class Panel extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      isLoaded: false,
      isCommentsLoaded: false,
      selected_now: null,
      selected_comments: null,
      panels: null,
      loading_submit: false,
      message: '',
      open: false,
      name: '',
      comment: '',
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.fetchPanels = this.fetchPanels.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchComments = this.fetchComments.bind(this);
  }

  componentDidMount() {
    this.fetchPanels();
    if(this.state.selected_now != null) {this.fetchComments();}
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

  fetchComments(pk) {
    $.ajax({
      method: "GET",
      url: "/api/comments/"+pk,
    }).done((data) => {
      this.setState({
        isCommentsLoaded: true,
        selected_comments: data
      });
    }).fail((error) => {
      const message = error.responseText.split('"')[1];
      this.setState({
        isCommentsLoaded: false,
        message: message,
      })
    })
  }

  handleClickOpen(pk) {
    $.ajax({
      method: "GET",
      url: "/api/panels/"+pk
    }).done(data => {
      this.fetchComments(pk)
      this.setState({
        open: true,
        selected_now: data,
      });
    }).fail(error => {
      this.setState({
        error: error.responseJSON.detail,
        open: false,
      });
    });
  };

  handleClose() {
    this.setState({ open: false, selected_now: null, name: '', comment: '' });
  };

  handleChange(event, state) {
    this.setState({ [state]: event.target.value });
  };

  handleSubmit() {
    const { name, comment, selected_now } = this.state;
    this.setState({ loading_submit: true });

    $.ajax({
      method: "POST",
      url: "/api/comments/",
      data: {
        name: name,
        comment: comment,
        panel: selected_now.pk,
      },
    }).done((data) => {
      this.setState({
        name: '',
        comment: '',
        loading_submit: false,
      });
      this.fetchComments(selected_now.pk)
    }).fail((error) => {
      const message = error.responseText.split('"')[1];
      this.setState({
        message: message,
      });
    });
  }


  render() {
    const { classes } = this.props;
    const { isLoaded, selected_now, selected_comments, panels, loading_submit, name, comment, isCommentsLoaded } = this.state;

    return (
      <div>
        {/*  */}
        <Grid container spacing={32}>
          {isLoaded && (
          panels.map(panel => (
            <Grid item xs={4}>
              <Card onClick={() => this.handleClickOpen(panel.pk)}>
                <CardActionArea>
                  <CardMedia
                    className={classes.card}
                    image={panel.image}
                  />
                </CardActionArea>
              </Card>
            </Grid>
          ))
        )}
        </Grid>
        
        {selected_now != null &&
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            scroll='body'
            aria-labelledby="scroll-dialog-title"
          >
            <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
            <DialogContent>
              <img src={selected_now.image}></img>
              <p>{selected_now.description}</p>
              <br/>
              {isCommentsLoaded && (selected_comments.map(comment => (
                <p>{comment.name} - {comment.comment}</p>
              )))}
            </DialogContent>
            <DialogActions>
              <TextField
                id="name"
                label="이름"
                value={this.state.name}
                onChange={e => this.handleChange(e, 'name')}
                margin="normal"
              />

              <TextField
                id="comment"
                label="남길 말"
                value={this.state.comment}
                onChange={e => this.handleChange(e, 'comment')}
                margin="normal"
              />

              <Button onClick={this.handleSubmit} disabled={loading_submit || name == '' || comment == ''}>저장</Button>

              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={this.handleClose} color="primary">
                Subscribe
              </Button>
            </DialogActions>
          </Dialog>
        }
      </div>
    );
  }
}

Panel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(Panel);
