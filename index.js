import './index.css'

import {useState} from 'react'

const Welcome = () => {
  const [isButtonSubribed, setIsButtonSubscribed] = useState('false')

  const buttonClicked = () => {
    setIsButtonSubscribed(!isButtonSubribed)
  }

  return (
    <div className="bg-container">
      <h1 className="heading">Welcome</h1>
      <p className="para"> Thank you!Happy Learning</p>
      <div>
        {isButtonSubribed ? (
          <button className="btn" onClick={buttonClicked}>
            Subscribed
          </button>
        ) : (
          <button className="btn" onClick={buttonClicked}>
            Subscribe
          </button>
        )}
      </div>
    </div>
  )
}

export default Welcome
