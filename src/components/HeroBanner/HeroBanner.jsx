import "./HeroBanner.css"

import bannerImg from "../../assets/heroBanner/herobannerimg.jpg"

const HeroBanner = (props) => {
  return (
    <div className="hero-banner">
      <img
        src={bannerImg}
        className="hero-banner-img"
        alt="pêcheur qui lance sa ligne dans un point d'eau"
      />
      <div className="hero-banner-img-shade"></div>
      <div className="hero-banner-text">
        <span id="hero-banner-text-span-1">{props.span1}</span>
        <p id="hero-banner-text-p-1">{props.p1}</p>
        <button id="heroBanner-text-btn-1" className="hero-banner-btn-1">
          {props.btn1}
          <i className="fa-solid fa-arrow-right"></i>
        </button>
        <button id="hero-banner-text-btn-2" className="hero-banner-btn-2">
          {props.btn2} <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  )
}

export default HeroBanner
