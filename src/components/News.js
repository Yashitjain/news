import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

let articles = []
export default class News extends Component {
  constructor(){
    super();
    this.state={
      articles:articles,
      page:1,
      pageSize:20,
      loading:false,
    }
  }
  
    componentDidMount = async (page)=>{
    this.setState({loading:true})
    console.log("current page=>",this.state.page);
    const url = `https://newsapi.org/v2/everything?q=business&sortBy=popularity&apiKey=691e4ff22f7b4f5b8815ad7411d86bab&page=${page}&pageSize=${this.state.pageSize}`
    let data = await fetch(url)
    data= await data.json();
    this.setState({articles:data.articles}) 
    this.setState({loading:false})

  }

  handleNextPage = ()=>{
    const newPage = this.state.page<5?this.state.page+1:this.state.page
    this.setState({page:newPage})
    console.log("current page next=> ",this.state.page)   
    this.componentDidMount(newPage);
  }
  
  handlePrevPage = ()=>{
    const newPage = this.state.page===1?this.state.page:this.state.page-1
    this.setState({page:newPage})
    console.log("current page prev=> ",this.state.page)
    this.componentDidMount(newPage);
  
  }

  render() {
    return (
    <>  
      <div className="container d-flex justify-content-between">
              <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePrevPage}>&larr; Prev</button>
              <button disabled={this.state.page===5} type="button" class="btn btn-dark" onClick={this.handleNextPage}>Next &rarr;</button>
        </div>
      <h1 className='text-center'> HOT NEWS</h1>
      {this.state.loading && <div style={{textAlign:"center"}}><Spinner /></div>}
      <div className='d-flex flex-row mb-4 flex-wrap justify-content-md-evenly'>
        {!this.state.loading && this.state.articles.map((element)=>{
          if(this.state.loading) this.setState({loading:false})
          if(!element.title.includes("Removed")){
            return(
              <div key={element.url} className="p-2" style={{margin:"1rem",}}>
                <div className="col-md-3 my-3" style={{margin:"1rem"}}>
                    <NewsItem heading={(element.title).slice(0,30)} imageurl={element.urlToImage} text={element.description=element.description?element.description.slice(0,90):element.description} newsUrl={element.url} />
                </div>
              </div>
            )
          }
          
        })}
        <div className="container d-flex justify-content-between">
              <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePrevPage}>&larr; Prev</button>
              <button disabled={this.state.page===5} type="button" class="btn btn-dark" onClick={this.handleNextPage}>Next &rarr;</button>
        </div>
      </div> 
    </>

    )
  }
}
