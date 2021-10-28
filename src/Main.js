import React, { Component } from 'react'
import HornedBeasts from './HornedBeasts';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';


class Main extends Component {

    render() {

        return (
            <div>
                <Row className="g-4">
                    {
                        this.props.images.map((image, index) => {
                            return <HornedBeasts key={index} title={image.title} imageUrl={image.image_url} description={image.description} keyword={image.keyword} horns={image.horns} showImage={this.props.showImage} />
                        })
                    }
                </Row>
            </div>
        )
    }
}

export default Main;