import './index.css'

const BannerPattern = props => {
  const {eachBanner} = props
  const {headerText, description, className} = eachBanner
  return (
    <div className={className}>
      <h1>{headerText}</h1>
      <p>{description}</p>
      <button>Show More</button>
    </div>
  )
}

export default BannerPattern
