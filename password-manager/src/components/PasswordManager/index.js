import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordItem from '../PasswordItem'
import './index.css'

class PasswordManager extends Component {
  state = {
    website: '',
    username: '',
    password: '',
    searchInput: '',
    passwordsList: [],
    showPasswords: false,
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onAddPassword = event => {
    event.preventDefault()
    const {website, username, password} = this.state

    if (website && username && password) {
      const newPassword = {
        id: uuidv4(),
        website,
        username,
        password,
      }

      this.setState(prevState => ({
        passwordsList: [...prevState.passwordsList, newPassword],
        website: '',
        username: '',
        password: '',
      }))
    }
  }

  onDeletePassword = id => {
    this.setState(prevState => ({
      passwordsList: prevState.passwordsList.filter(each => each.id !== id),
    }))
  }

  onToggleShowPasswords = event => {
    this.setState({showPasswords: event.target.checked})
  }

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  getFilteredPasswords = () => {
    const {passwordsList, searchInput} = this.state
    return passwordsList.filter(each =>
      each.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
  }

  render() {
    const {website, username, password, showPasswords, searchInput} = this.state

    const filteredPasswords = this.getFilteredPasswords()

    return (
      <div className="app-container">
        <div className="password-manager-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="app-logo"
          />

          <div className="card-container">
            <form className="form-container" onSubmit={this.onAddPassword}>
              <h1 className="heading">Add New Password</h1>

              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                />
                <input
                  type="text"
                  placeholder="Enter Website"
                  value={website}
                  onChange={this.onChangeWebsite}
                />
              </div>

              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                />
                <input
                  type="text"
                  placeholder="Enter Username"
                  value={username}
                  onChange={this.onChangeUsername}
                />
              </div>

              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                />
                <input
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={this.onChangePassword}
                />
              </div>

              <button type="submit" className="add-button">
                Add
              </button>
            </form>

            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="manager-image"
            />
          </div>

          <div className="passwords-container">
            <div className="passwords-header">
              <h1 className="heading">
                Your Passwords{' '}
                <p className="count">{filteredPasswords.length}</p>
              </h1>

              <div className="search-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                />
                <input
                  type="search"
                  placeholder="Search"
                  value={searchInput}
                  onChange={this.onChangeSearch}
                />
              </div>
            </div>

            <div className="checkbox-container">
              <input
                type="checkbox"
                id="showPasswords"
                onChange={this.onToggleShowPasswords}
              />
              <label htmlFor="showPasswords">Show Passwords</label>
            </div>

            {filteredPasswords.length === 0 ? (
              <div className="no-passwords">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                />
                <p>No Passwords</p>
              </div>
            ) : (
              <ul className="passwords-list">
                {filteredPasswords.map(each => (
                  <PasswordItem
                    key={each.id}
                    passwordDetails={each}
                    showPasswords={showPasswords}
                    onDeletePassword={this.onDeletePassword}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager

