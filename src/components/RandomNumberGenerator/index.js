// Write your code here

import './index.css'
import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  randomNumber = () => {
    const random = Math.ceil(Math.random() * 100)

    this.setState({count: random})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="bg-container-2">
          <h1 className="heading"> Random Number </h1>
          <p> Generate a random number in the range of 0 to 100 </p>
          <button type="button" className="button" onClick={this.randomNumber}>
            Generate
          </button>
          <p className="count">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
