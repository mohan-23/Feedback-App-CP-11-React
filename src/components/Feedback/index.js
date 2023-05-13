import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isClick: false}

  onClickImage = () => {
    this.setState(prevState => ({isClick: !prevState.isClick}))
  }

  render() {
    const {isClick} = this.state
    const {resources} = this.props

    const para =
      'We will use your feedback to improve our customer support performance.'

    const title = isClick ? 'Thank You!' : ''
    const imageUrl = isClick ? resources.loveEmojiUrl : ''
    const description = isClick ? para : ''
    const isVisible = isClick ? 'visible' : ''
    const isLoveHide = isClick ? 'thank-container' : 'hide'

    return (
      <div className="app-container">
        <div className="card-container">
          <div className={`card-body ${isVisible}`}>
            <h1 className="heading">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="list-container">
              {resources.emojis.map(eachList => (
                <li className="list-items" key={eachList.id}>
                  <img
                    src={eachList.imageUrl}
                    className="image"
                    alt={eachList.name}
                    onClick={this.onClickImage}
                  />
                  <p className="emoji-name">{eachList.name}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className={isLoveHide}>
            <img src={imageUrl} alt="love emoji" className="image" />
            <h1 className="heading">{title}</h1>
            <p className="description">{description}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Feedback
