
import React, { Component } from 'react'
import images from './Assets/data.json';
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import SelectedBeast from './SelectedBeast'
import ByNumOfHorns from './ByNumOfHorns'


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBeast: {},
      filteredBeast: images,
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

  handleChange = (event) => {
    let selection = event.target.value;
    let updatedBeasts;

    if (selection === "oneHorn") {

      updatedBeasts = images.filter(beast => beast.horns === 1);
      this.setState({ filteredBeast: updatedBeasts })

    } else if (selection === "twoHorns") {
      updatedBeasts = images.filter(beast => beast.horns === 2);
      this.setState({ filteredBeast: updatedBeasts })
    }
    else if (selection === "threeHorns") {
      updatedBeasts = images.filter(beast => beast.horns === 3);
      this.setState({ filteredBeast: updatedBeasts })
    }
    else if (selection === "hundredHorns") {
      updatedBeasts = images.filter(beast => beast.horns === 100);
      this.setState({ filteredBeast: updatedBeasts })
    }

    else {
      this.setState({ filteredBeast: images })

    }
  }

  render() {
    return (
      <div>
        <Header />
        <ByNumOfHorns handleChange={this.handleChange} />
        <Main images={this.state.filteredBeast} showImage={this.showImage} />
        <Footer />
        <SelectedBeast show={this.state.show} hideImage={this.hideImage} selectedBeast={this.state.selectedBeast} />
      </div>
    )
  }
}
