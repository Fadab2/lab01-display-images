import React, { Component } from 'react'
import {
    MDBRow,
    MDBCol,
    MDBContainer
  } from "mdbreact";

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>
class HornedBeasts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            countOfFavorites: 0
        }
    }

    handleClick = () => {
        console.log('I was favorited');
        this.setState({ countOfFavorites: this.state.countOfFavorites + 1 });
    }


    render() {
        return (
            <>
                <h2>{this.props.title}</h2>

                <img src={this.props.imageUrl} fluid onClick={this.handleClick} title={this.props.title} alt={this.props.keywords} className='img-fluid' />
                <p>💓 : {this.state.countOfFavorites}</p>
                <p>{this.props.description}</p>
            </>
        )
    }
}

export default HornedBeasts;