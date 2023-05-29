// Write your code here
import Component from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {count: 0, count1: 0}

  Increment = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  Increment2 = () => {
    this.setState(prevState => ({count1: prevState.count1 + 1}))
  }

  render() {
    const {count, count1} = this.state
    return (
      <div className="container">
        <div className="container1">
          <h1 className="heading">
            Bob ate {count} mangoes {count1} bananas
          </h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
            className="image"
            alt="mango"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
            className="image"
            alt="banana"
          />
          <div>
            <button className="button" type="button" onClick={this.Increment}>
              Eat Mango
            </button>
            <button className="button" type="button" onClick={this.Increment2}>
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
