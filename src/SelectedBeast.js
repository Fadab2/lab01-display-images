import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';


class SelectedBeast extends Component {

    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.hideImage}>
                    <Modal.Header>
                        <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Card.Img variant="top" src={this.props.selectedBeast.image_url} title={this.props.selectedBeast.title} alt={this.props.selectedBeast.keywords} />
                        <Card.Text> {this.props.selectedBeast.description}</Card.Text>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button class="btn btn-primary" onClick={this.props.hideImage}> Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default SelectedBeast;