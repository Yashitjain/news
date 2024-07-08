import React, { Component } from 'react'

const NewsItem = (props)=> {
  let {heading,imageurl,text,newsUrl,publishDate,source} = props
  publishDate = new Date(publishDate).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'});
    return (
      <div style={{border:"1px solid black",width:"18rem"}}>
        <div className="card" style={{}}>
        <span className="badge badge-pill badge-danger" style={{width:"fit-content",zIndex:"1",position:"absolute",backgroundColor:"red",right:"0px",color:"white"}}>By <span>{source}</span> </span>
        <img src={imageurl} className="card-img-top" alt="..." style={{width:"100%",aspectRatio:"16/9"}}/>
            <div className="card-body" style={{position:"relative"}}>
                <h5 className="card-title">{heading}</h5>
                <p className="card-text" style={{width:"100%",height:"4rem"}}>{text}
                  <p style={{width:"fit-content",right:"5px",bottom:"12px",position:"absolute"}}>{(`${publishDate.slice(0,10)}`)}</p>
                </p>
                <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-primary" >Read</a>
            </div>
        </div>
      </div>
    )
  }
export default NewsItem
