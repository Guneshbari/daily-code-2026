import './index.css'

const PasswordItem = props => {
  const {passwordDetails, showPasswords, onDeletePassword} = props
  const {id, website, username, password} = passwordDetails

  const logoLetter = website[0].toUpperCase()

  return (
    <li className="password-item">
      <div className="left-section">
        <div className="logo-circle">{logoLetter}</div>

        <div className="text-container">
          <p className="website">{website}</p>
          <p className="username">{username}</p>
          {showPasswords ? (
            <p className="password-text">{password}</p>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
              className="stars"
            />
          )}
        </div>
      </div>

      <button
        type="button"
        data-testid="delete"
        className="delete-button"
        onClick={() => onDeletePassword(id)}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default PasswordItem

