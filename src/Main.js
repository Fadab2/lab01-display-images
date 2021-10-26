import React, { Component } from 'react'
import HornedBeasts from './HornedBeasts';
import images from './Assets/data.json';
import 'bootstrap/dist/css/bootstrap.min.css';


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
        
        }
    }
    render() {

        return (
            <div>
                {
                    images.map((image, index) => {
                        return <HornedBeasts key={index} title={image.title} imageUrl={image.image_url} description={image.description} keyword={image.keyword} horns={image.horns} />
                    })
                }


            </div>
        )
    }
}

export default Main;