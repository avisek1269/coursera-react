import React, { Component } from 'react';
import {Modal, ModalHeader, ModalBody, Button, Row, Label} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length > len);

class CommentForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
          };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        this.toggleModal();
        }

    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }

    render() {
        return(
            <>
                <Button type="button" className="fa fa-pencil" outline color="secondary" size="lg"
                onClick={this.toggleModal}>
                    <span className="ml-1">Submit Comment</span>
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                <ModalBody>
                <LocalForm className="container" onSubmit={(values) => this.handleSubmit(values)}>
                    <Row className="form-group">
                    <Label htmlFor="rating">Rating</Label>
                        <Control.select model=".rating" id="rating" name="rating"
                        className="form-control" defaultValue="1"> 
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="3">4</option>
                        <option value="3">5</option>
                        </Control.select>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="yourname">Your Name</Label>
                        <Control.text type="text" model=".yourname" id="yourname" name="yourname"
                        className="form-control"
                        validators={{
                            required, minLength: minLength(2), maxLength: maxLength(15)
                        }} />
                        <Errors
                            className="text-danger"
                            model=".yourname"
                            show="touched"
                            messages={{
                                required: 'Required',
                                minLength: 'Must be greater than 2 characters',
                                maxLength: 'Must be 15 characters or less'
                            }} />
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="comment">Comment</Label>
                        <Control.textarea model=".comment" type="text" id="comment" name="comment"
                            rows="6" className="form-control"/>
                    </Row>
                    <Button type="submit" value="submit" color="primary">Submit</Button>
                </LocalForm>
                </ModalBody>
            </Modal>
        </>
        );
    }
}

export default CommentForm;