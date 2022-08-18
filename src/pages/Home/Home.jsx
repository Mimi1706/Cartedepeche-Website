import "./Home.css"
import { Link } from "react-router-dom"

import HeroBanner from "../../components/HeroBanner/HeroBanner"
import data from "../../data/lang/fr/Home.js"

import NewsWidget from "../../components/NewsWidget/NewsWidget"
import Carousel from "../../components/Carousel/Carousel"

import ad1 from "../../assets/widgets/ad-1.jpg"
import ad2 from "../../assets/widgets/ad-2.jpg"
import ad3 from "../../assets/widgets/ad-3.jpg"
import partner1 from "../../assets/partners/partner-1.jpg"
import partner2 from "../../assets/partners/partner-2.png"
import partner3 from "../../assets/partners/partner-3.jpg"
import partner4 from "../../assets/partners/partner-4.png"
import partner5 from "../../assets/partners/partner-5.png"
import partner6 from "../../assets/partners/partner-6.png"

const Home = () => {
  return (
    <main>
      <HeroBanner
        span1={data.heroBannerText.span1}
        p1={data.heroBannerText.p1}
        btn1={data.heroBannerText.btn1}
        btn2={data.heroBannerText.btn2}
      />
      <div className="all-content">
        <div className="all-content-column-1">
          <section className="news">
            <div className="section-title">
              <h1>Dernières actualités</h1>
              <Link to="">Voir toutes les actualités</Link>
            </div>
            <div className="news-content">
              {data.newsWidget.map(({ img, h1, p, alt }, index) => (
                <NewsWidget
                  key={index}
                  img={img}
                  title={h1}
                  text={p}
                  alt={alt}
                ></NewsWidget>
              ))}
            </div>
          </section>

          <section className="videos">
            <div className="section-title">
              <h1>Nos vidéos</h1>
              <Link to="">Voir toutes les vidéos</Link>
            </div>
            <iframe
              width="100%"
              src="https://www.youtube.com/embed/qymELwtmYrQ"
              title="YouTube video player"
            ></iframe>
          </section>
        </div>

        <div className="all-content-column-2">
          <section className="ads">
            <Carousel>
              <img src={ad1} alt="ads"></img>
              <img src={ad2} alt="ads"></img>
              <img src={ad3} alt="ads"></img>
            </Carousel>
          </section>

          <section className="social-media">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffederationnationalepeche%2F&tabs=timeline&width=400&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
              title="Facebook plugin"
              width="400"
              data-adapt-container-width="true"
            ></iframe>
          </section>
        </div>
      </div>

      <section className="partners">
        <div className="section-title">
          <h1>Partenaires officiels</h1>
        </div>
        <div className="partners-content">
          <img src={partner1} alt="logo du partenaire"></img>
          <img src={partner2} alt="logo du partenaire"></img>
          <img src={partner3} alt="logo du partenaire"></img>
          <img src={partner4} alt="logo du partenaire"></img>
          <img src={partner5} alt="logo du partenaire"></img>
          <img src={partner6} alt="logo du partenaire"></img>
        </div>
      </section>
    </main>
  )
}

export default Home
