import "./styles.css"

export type CardProps = {
  imageURL?: string
  title?: string
  content?: React.ReactNode
}

export default function Card({ imageURL, title, content }: CardProps) {
  return (
    <div className="card">
      <div className="box-item">
        <div className="flip-box">
          <div className="flip-box-front">
            <img className="card-image" src={imageURL} alt={title} />
            <div className="card-actions">
              <div className="card-title">{title}</div>
              <div className="card-content">{content}</div>
            </div>
          </div>
          <div className="flip-box-back">
            <img className="card-image" src={imageURL} alt={title} />
            <div className="card-actions">
              <div className="card-title">{title}</div>
              <div className="card-content">{content}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
