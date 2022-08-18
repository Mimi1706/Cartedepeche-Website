import { useState } from "react"
import "./Carousel.css"

const Carousel = (props) => {
  const { children } = props

  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div className="carousel-content-wrapper">
          <div
            className="carousel-content"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {children}
          </div>
        </div>
        <div className="carousel-buttons">
          {Array(...Array(children.length)).map((val, index) => (
            <div key={index} onClick={() => setCurrentIndex(index)}>
              {index === currentIndex ? "●" : "○"}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel
