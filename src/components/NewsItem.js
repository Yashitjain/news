import React, { Component } from 'react'

export default class NewsItem extends Component {
  render(props) {
  let {heading,imageurl,text,newsUrl} = this.props

    return (
      <div style={{border:"1px solid black",width:"18rem"}}>
        <div className="card" style={{}}>
            <img src={imageurl} className="card-img-top" alt="..." style={{width:"100%",aspectRatio:"16/9"}}/>
            <div className="card-body">
                <h5 className="card-title">{heading}</h5>
                <p className="card-text" style={{width:"100%",height:"4rem"}}>{text}</p>
                <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-primary" >Read</a>
            </div>
            </div>
      </div>
    )
  }
}
