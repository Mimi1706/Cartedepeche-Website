import "./NewsWidget.css"

const NewsWidget = (props) => {
  return (
    <article className="news-widget">
      <img src={props.img} alt={props.alt} />
      <div>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
      </div>
    </article>
  )
}

export default NewsWidget
