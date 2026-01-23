import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, onChangeTab} = props
  const {tabId, displayText} = tabDetails

  const activeClass = isActive ? 'active-tab' : ''

  return (
    <li>
      <button
        type="button"
        className={`tab-btn ${activeClass}`}
        onClick={() => onChangeTab(tabId)}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem

