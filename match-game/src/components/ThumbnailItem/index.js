import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, onClickThumbnail} = props
  const {thumbnailUrl, imageUrl} = imageDetails

  return (
    <li>
      <button
        type="button"
        className="thumbnail-btn"
        onClick={() => onClickThumbnail(imageUrl)}
      >
        <img src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default ThumbnailItem

