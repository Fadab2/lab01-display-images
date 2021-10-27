import React, { Component } from 'react'
import HornedBeasts from './HornedBeasts';
import images from './Assets/data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {

        return (
            <div>
                <Row lg={4} md={5} className="g-4">

                    {
                        images.map((image, index) => {
                            return <HornedBeasts key={index} title={image.title} imageUrl={image.image_url} description={image.description} keyword={image.keyword} horns={image.horns} />
                        })
                    }

                </Row>
            </div>
        )
    }
}

export default Main;