import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


let articles = []
export default class News extends Component {
  static defaultProps={
    country:"in",
    pageSize:8
  }

  static ProtoTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
  }

  constructor(){
    super();
    this.state={
      articles:articles,
      page:1,
      pageSize:10,
      loading:false,
      totalarticles :0
    }
  }  

  updateNews = async()=>{
    this.setState({loading:true})
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&sortBy=popularity&apiKey=424e10faf7e344d6a1a7918fc4349bc0&page=${this.state.page}&pageSize=${this.state.pageSize}`
    let data = await fetch(url)
    data = await data.json();
    this.setState({articles:data.articles,totalarticles:data.totalResults});
    console.log("data=>",data)
    this.setState({loading:false})
  }

  componentDidMount = ()=>{
    this.updateNews()
  }

  fetchMoreData = async () =>{
    const newpage = this.state.page + 1
    this.setState({page:newpage})
    console.log(this.state.page)
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&sortBy=popularity&apiKey=424e10faf7e344d6a1a7918fc4349bc0&page=${newpage}&pageSize=${this.state.pageSize}`
    let data = await fetch(url)
    data = await data.json();
    setTimeout(() => {
    this.setState({articles:(this.state.articles).concat(data.articles),totalarticles:data.totalResults});
    }, 1500);
    console.log("data.articles=>",data.articles)
  }

  render() {
    return (
    <>  
      <h1 className='text-center'> HOT NEWS</h1>
      <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length<this.state.totalarticles}
          loader={<Spinner />}
      >

          <div className='d-flex flex-row mb-4 flex-wrap justify-content-md-evenly'>
            {!this.state.loading && this.state.articles.map((element)=>{
              if(this.state.loading) this.setState({loading:false})
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
}
