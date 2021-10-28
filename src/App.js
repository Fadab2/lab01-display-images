
import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal';
import images from './Assets/data.json';
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import SelectedBeast from './SelectedBeast'


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBeast: {},
      show: false
    }
  }

  hideImage = () => {
    this.setState({ show: false })
  }

  showImage = (title) => {
        const selectedBeast = images.find(beast => beast.title === title);

        this.setState({
            show: true,
            selectedBeast: selectedBeast
        })
    }

  render() {
    return (
      <div>
        <Header />
        <Main images={images} showImage={this.showImage} />
        <Footer />
        <SelectedBeast show={this.state.show} hideImage={this.hideImage} selectedBeast={this.state.selectedBeast}/>
      </div>
    )
  }
}
