import './index.css'

const BannerPattern = props => {
  const {cardDetails} = props
  const {headerText, description, className} = cardDetails
  return (
    <li className="bg-container">
      <div className={className}>
        <h1>{headerText}</h1>
        <p>{description}</p>
      </div>
    </li>
  )
}

export default BannerPattern
