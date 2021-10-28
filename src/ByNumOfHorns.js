import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';

class ByNumOfHorns extends Component {


  render() {
    return (
      <div>
        <Form>
          <Form.Select onChange={this.props.handleChange} aria-label="Default select example">
            <option>Select a number of horns</option>
            <option value="oneHorn">One Horn</option>
            <option value="twoHorns">Two Horns</option>
            <option value="threeHorns">Three Horns</option>
            <option value="hundredHorns">Hundred Horns</option>
            <option value="all">All</option>
          </Form.Select>
        </Form> 
      </div>
    )
  }
}

export default ByNumOfHorns;