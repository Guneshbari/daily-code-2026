import {Component} from 'react'
import TabItem from '../TabItem'
import ThumbnailItem from '../ThumbnailItem'
import './index.css'

class MatchGame extends Component {
  state = {
    score: 0,
    time: 60,
    activeTabId: 'FRUIT',
    matchImageUrl: '',
    isGameOver: false,
  }

  componentDidMount() {
    const {imagesList} = this.props
    this.setState({matchImageUrl: imagesList[0].imageUrl})
    this.timerId = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  tick = () => {
    this.setState(prev => {
      if (prev.time === 1) {
        clearInterval(this.timerId)
        return {time: 0, isGameOver: true}
      }
      return {time: prev.time - 1}
    })
  }

  onChangeTab = tabId => {
    this.setState({activeTabId: tabId})
  }

  getRandomImage = () => {
    const {imagesList} = this.props
    const randomIndex = Math.floor(Math.random() * imagesList.length)
    return imagesList[randomIndex].imageUrl
  }

  onClickThumbnail = imageUrl => {
    const {matchImageUrl} = this.state

    if (imageUrl === matchImageUrl) {
      this.setState(prev => ({
        score: prev.score + 1,
        matchImageUrl: this.getRandomImage(),
      }))
    } else {
      clearInterval(this.timerId)
      this.setState({isGameOver: true})
    }
  }

  onPlayAgain = () => {
    const {imagesList} = this.props
    this.setState(
      {
        score: 0,
        time: 60,
        activeTabId: 'FRUIT',
        matchImageUrl: imagesList[0].imageUrl,
        isGameOver: false,
      },
      () => {
        this.timerId = setInterval(this.tick, 1000)
      },
    )
  }

  renderScoreCard = () => {
    const {score} = this.state
    return (
      <div className="score-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
          className="trophy"
        />
        <p>Your Score</p>
        <h1>{score}</h1>
        <button
          type="button"
          className="play-again-btn"
          onClick={this.onPlayAgain}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
          />
          PLAY AGAIN
        </button>
      </div>
    )
  }

  render() {
    const {tabsList, imagesList} = this.props
    const {score, time, activeTabId, matchImageUrl, isGameOver} = this.state

    const filteredImages = imagesList.filter(
      each => each.category === activeTabId,
    )

    return (
      <div className="app-bg">
        <div className="nav-bar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
            className="logo"
          />
          <ul className="nav-items">
            <li className="nav-item">
              <p>Score:</p>
              <p>{score}</p>
            </li>

            <li className="nav-item timer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                alt="timer"
              />
              <p>{time} sec</p>
            </li>
          </ul>
        </div>

        {isGameOver ? (
          this.renderScoreCard()
        ) : (
          <>
            <img src={matchImageUrl} alt="match" className="match-image" />

            <ul className="tabs">
              {tabsList.map(tab => (
                <TabItem
                  key={tab.tabId}
                  tabDetails={tab}
                  isActive={tab.tabId === activeTabId}
                  onChangeTab={this.onChangeTab}
                />
              ))}
            </ul>

            <ul className="thumbnails">
              {filteredImages.map(each => (
                <ThumbnailItem
                  key={each.id}
                  imageDetails={each}
                  onClickThumbnail={this.onClickThumbnail}
                />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default MatchGame

