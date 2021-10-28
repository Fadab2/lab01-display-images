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
        this.setState({ countOfFavorites: this.state.countOfFavorites + 1 });
        this.props.showImage(this.props.title);
    }

    render() {
        return (
            <>
                <Card style={{ width: '18rem' }}>

                    <Card.Img variant="top" src={this.props.imageUrl} onClick={this.handleClick} title={this.props.title} alt={this.props.keywords} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted" onClick={this.handleClick} onMouseOver={this.handleHover}>💓 : {this.state.countOfFavorites}</small>
                    </Card.Footer>
                </Card>

            </>
        )
    }
}

export default HornedBeasts;