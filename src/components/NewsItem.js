import React from "react";

const NewsItem = (props)=> {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
        <div style={{display:'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    right: '0'}}>
            <span className="badge rounded-pill bg-danger" style={{left:'90%', zIndex :'1'}}>
           {source}
          </span>
        </div>
          
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://cdn.ndtv.com/common/images/ogndtv.png"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-danger">
                By {author ? author : ""} on {new Date(date).toUTCString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
