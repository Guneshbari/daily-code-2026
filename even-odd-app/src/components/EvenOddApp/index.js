import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    const randomNumber = Math.floor(Math.random() * 101) // 0 to 100
    this.setState(prevState => ({
      count: prevState.count + randomNumber,
    }))
  }

  render() {
    const {count} = this.state
    const statusText = count % 2 === 0 ? 'Count is Even' : 'Count is Odd'

    return (
      <div className="app-container">
        <h1 className="count">Count {count}</h1>
        <p className="status" aria-live="polite">
          {statusText}
        </p>
        <button className="button" type="button" onClick={this.onIncrement}>
          Increment
        </button>
        <p className="note">*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp

