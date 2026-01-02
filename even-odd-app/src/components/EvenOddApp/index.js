import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, isEven: true}

  onIncrement = () => {
    const randomNumber = Math.floor(Math.random() * 101)
    this.setState(prevState => {
      const updatedCount = prevState.count + randomNumber
      return {
        count: updatedCount,
        isEven: updatedCount % 2 === 0,
      }
    })
  }

  render() {
    const {count, isEven} = this.state
    const text = isEven ? 'Count is Even' : 'Count is Odd'

    return (
      <div className="app-container">
        <h1 className="count">Count {count}</h1>
        <p className="status">{text}</p>
        <button className="button" type="button" onClick={this.onIncrement}>
          Increment
        </button>
        <p className="note">*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp

