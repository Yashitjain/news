import React, { useState,useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


let articles = []
const News = (props) => {

  const [articles,setArticles] = useState([])
  const [page,setPage] = useState(1)
  const [pageSize,setPageSize] = useState(10)
  const [loading,setLoading] = useState(false)
  const [totalArticles,setTotalArticles] = useState(0)

  const updateNews = async()=>{
    setLoading(true)
    props.progress(30)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&sortBy=popularity&apiKey=${props.apiKey}&page=${page}&pageSize=${pageSize}`
    let data = await fetch(url)
    data = await data.json();
    props.progress(70)
    setArticles(data.articles)
    setTotalArticles(data.totalResults)
    setLoading(false)
    props.progress(100)

  }

  useEffect (()=>{
    updateNews()
  },[])

  const fetchMoreData = async () =>{
    const newpage = page + 1
    setPage(newpage)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&sortBy=popularity&apiKey=${props.apiKey}&page=${newpage}&pageSize=${pageSize}`
    let data = await fetch(url)
    data = await data.json();
    setTimeout(() => {
      setArticles(articles.concat(data.articles))
      setTotalArticles(data.totalResults)
    }, 1500);
  }
    return (
    <>  
      <h1 className='text-center'> HOT NEWS</h1>
      <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length<totalArticles}
          loader={<Spinner />}
      >
          <div className='d-flex flex-row mb-4 flex-wrap justify-content-md-evenly'>
            {!loading && articles.map((element)=>{
              if(loading) setLoading(false)
              if(element && !element.title.includes("Removed") ){
                return(
                  <div key={element.url} className="p-2" style={{margin:"1rem",}}>
                    <div className="col-md-3 my-3" style={{margin:"1rem"}}>
                        <NewsItem heading={(element.title).slice(0,30)} imageurl={element.urlToImage} text={element.description=element.description?element.description.slice(0,90):element.description} newsUrl={element.url} publishDate={(element.publishedAt)} source={element.source.name}/>
                    </div>
                  </div>
                )
              }
            })}
          </div> 
        </InfiniteScroll>
    </>
    )
  }
//eslint-disable-line

News.defaultProps={
  country:"in",
  pageSize:8
}
//eslint-disable-line

News.ProtoTypes={
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string,
}

export default News