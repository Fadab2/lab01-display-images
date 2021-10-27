import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'


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
                <Card style={{ width: '40rem' }}>

                    <Card.Img variant="top" src={this.props.imageUrl} onClick={this.handleClick} title={this.props.title} alt={this.props.keywords} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">💓 : {this.state.countOfFavorites}</small>
                    </Card.Footer>
                </Card>
                {/* <h2>{this.props.title}</h2>

                <img src={this.props.imageUrl} fluid onClick={this.handleClick} title={this.props.title} alt={this.props.keywords} className='img-fluid' />
                <p>💓 : {this.state.countOfFavorites}</p>
                <p>{this.props.description}</p> */}
            </>
        )
    }
}

export default HornedBeasts;