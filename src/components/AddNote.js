import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

class AddNote extends Component {
  state = {
    show: false,
    title: '',
    body: '',
  };
  
  handleClose = () => {
		this.setState({ show: false });
	};

	handleShow = () => {
		this.setState({ show: true });
  };
  
  onSubmit = (e) => {
    e.preventDefault();
    const {title, body} = this.state;
    this.props.addNote(title, body);
    this.setState({ 
        title: '', 
        body: ''
    });
  };

  onChange = (e) => {
      this.setState({[e.target.name]: e.target.value})
  };
  
  render() { 
    return ( 
      <>
      <button 
          onClick={this.handleShow}
          style={btnStyle}
          className="btn btn-light">
          Write Note
      </button>

      <Modal show={this.state.show} onHide={this.handleClose}>
        <Form onSubmit={this.onSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Note</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter Title"
                name="title" 
                value={this.state.title} 
                onChange={this.onChange} /> 
            </Form.Group>
            <Form.Group>
              <Form.Label>Body</Form.Label>
              <Form.Control 
                as="textarea" 
                rows="9"
                name="body" 
                value={this.state.body} 
                onChange={this.onChange} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Discard
            </Button>
            <Button variant="primary" onClick={this.handleClose} type="submit">
              Save
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
     );
  }
}

const btnStyle = {
  fontSize: 18
};

 
export default AddNote;


