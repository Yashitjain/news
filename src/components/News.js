import React, { Component } from 'react'
import NewsItem from './NewsItem'

let articles = [
  {
  "source": {
  "id": "google-news",
  "name": "Google News"
  },
  "author": "CNBC",
  "title": "Nasdaq futures rise after benchmark's worst day since April: Live updates - CNBC",
  "description": null,
  "url": "https://news.google.com/rss/articles/CBMiRGh0dHBzOi8vd3d3LmNuYmMuY29tLzIwMjQvMDYvMjQvc3RvY2stbWFya2V0LXRvZGF5LWxpdmUtdXBkYXRlcy5odG1s0gFIaHR0cHM6Ly93d3cuY25iYy5jb20vYW1wLzIwMjQvMDYvMjQvc3RvY2stbWFya2V0LXRvZGF5LWxpdmUtdXBkYXRlcy5odG1s?oc=5",
  "urlToImage": null,
  "publishedAt": "2024-06-25T10:14:00Z",
  "content": null
  },
  {
  "source": {
  "id": null,
  "name": "Financial Times"
  },
  "author": null,
  "title": "EU charges Microsoft with antitrust violations over Teams - Financial Times",
  "description": "Allegations that software giant gained ‘undue advantage’ by bundling video conferencing app with Office are first such charges against it in over a decade",
  "url": "https://www.ft.com/content/eb83bb45-84b3-4c58-9589-684029d23243",
  "urlToImage": null,
  "publishedAt": "2024-06-25T09:45:39Z",
  "content": "Then $75 per month.Complete digital access to quality FT journalism on any device. Cancel anytime during your trial."
  },
  {
  "source": {
  "id": "google-news",
  "name": "Google News"
  },
  "author": "Yahoo Finance",
  "title": "Stock market today: Global stocks mixed after Nvidia tumbles again as AI mania cools - Yahoo Finance",
  "description": null,
  "url": "https://news.google.com/rss/articles/CBMiTWh0dHBzOi8vZmluYW5jZS55YWhvby5jb20vbmV3cy9zdG9jay1tYXJrZXQtdG9kYXktYXNpYW4tc3RvY2tzLTA2MzgxODg5OC5odG1s0gEA?oc=5",
  "urlToImage": null,
  "publishedAt": "2024-06-25T09:42:14Z",
  "content": null
  },
  {
  "source": {
  "id": "cnn",
  "name": "CNN"
  },
  "author": "Juliana Liu",
  "title": "China warns against ‘vicious cycle’ of decoupling from the West - CNN",
  "description": "Chinese Premier Li Qiang has warned against a “vicious cycle” of economic decoupling from the West, as Beijing struggles to contain rising global pushback over soaring electric vehicle (EV) exports.",
  "url": "https://www.cnn.com/2024/06/25/economy/china-li-qiang-economic-decoupling-warning-intl-hnk/index.html",
  "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2158575075.jpg?c=16x9&q=w_800,c_fill",
  "publishedAt": "2024-06-25T09:10:00Z",
  "content": "Editors Note: Sign up for CNNs Meanwhile in China newsletter which explores what you need to know about the countrys rise and how it impacts the world.\r\nChinese Premier Li Qiang has warned against a … [+2821 chars]"
  },
  {
  "source": {
  "id": "google-news",
  "name": "Google News"
  },
  "author": "CoinDesk",
  "title": "Mt. Gox Redemption Fears 'Overblown' Say Traders as $10B BTC Holdings Draw Concerns - CoinDesk",
  "description": null,
  "url": "https://news.google.com/rss/articles/CBMifGh0dHBzOi8vd3d3LmNvaW5kZXNrLmNvbS9tYXJrZXRzLzIwMjQvMDYvMjUvbXQtZ294LXJlZGVtcHRpb24tZmVhcnMtb3ZlcmJsb3duLXNheS10cmFkZXJzLWFzLTEwYi1idGMtaG9sZGluZ3MtZHJhdy1jb25jZXJucy_SAQA?oc=5",
  "urlToImage": null,
  "publishedAt": "2024-06-25T07:53:00Z",
  "content": null
  },
  {
  "source": {
  "id": null,
  "name": "Barron's"
  },
  "author": "Barron's",
  "title": "Nvidia Stock Is Cracking. How to Side-Step the Damage. - Barron's",
  "description": null,
  "url": "https://www.barrons.com/articles/nvidia-stock-falling-what-to-do-298c9ad7",
  "urlToImage": null,
  "publishedAt": "2024-06-25T06:30:00Z",
  "content": null
  },
  {
  "source": {
  "id": null,
  "name": "Ambcrypto.com"
  },
  "author": "Victor Olanrewaju",
  "title": "Whales abandon Shiba Inu: What’s next for SHIB price? - AMBCrypto News",
  "description": "The short to mid-term future for SHIB looks bleak and here are the reasons why.",
  "url": "https://ambcrypto.com/?p=401956",
  "urlToImage": "https://ambcrypto.com/wp-content/uploads/2024/06/shiba-inu-news-prediction-1000x600.webp",
  "publishedAt": "2024-06-25T06:01:57Z",
  "content": "<ul><li>SHIB risks dropping to $0.000014 as a lot of addresses keep selling some of their holdings.</li><li>Activity on Shiba Inu dropped even as the network became overvalued.</li></ul>According to … [+2708 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "[Removed]"
  },
  "author": null,
  "title": "[Removed]",
  "description": "[Removed]",
  "url": "https://removed.com",
  "urlToImage": null,
  "publishedAt": "1970-01-01T00:00:00Z",
  "content": "[Removed]"
  },
  {
  "source": {
  "id": null,
  "name": "CoinDesk"
  },
  "author": "Sam Reynolds",
  "title": "Bitcoin (BTC) Price Hold Steady at $61K After a Brief Nosedive to Below $60K - CoinDesk",
  "description": "Bitcoin briefly touched $59K in the early hours of the Asian+ trading day.",
  "url": "https://www.coindesk.com/markets/2024/06/25/bitcoin-holds-61k-after-a-brief-nosedive/",
  "urlToImage": "https://www.coindesk.com/resizer/zrueK8K-5iYjfeYHOb7OSSEy2kA=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/IW36OIAAY5GF5OECJW6IXCA7ZQ.png",
  "publishedAt": "2024-06-25T05:55:00Z",
  "content": "Please note that ourprivacy policy,terms of use,cookies, anddo not sell my personal informationhas been updated.\r\nCoinDesk is anaward-winningmedia outlet that covers the cryptocurrency industry. Its … [+593 chars]"
  },
  {
  "source": {
  "id": "the-verge",
  "name": "The Verge"
  },
  "author": "Quentyn Kennemer",
  "title": "Amazon Prime Day 2024 will take place on July 16th and 17th - The Verge",
  "description": "Amazon Prime Day 2024 will take place on July 16th and 17th, bringing steep discounts on popular products across dozens of categories, from home goods to tech.",
  "url": "https://www.theverge.com/2024/6/25/24145258/amazon-prime-day-dates-july-2024-sale",
  "urlToImage": "https://cdn.vox-cdn.com/thumbor/33yR7O9Rj6MB1-iqif3RqkLldc8=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/16447558/acastro_190621_1777_prime_day_0003.0.jpg",
  "publishedAt": "2024-06-25T05:00:00Z",
  "content": "Amazon Prime Day 2024 will take place on July 16th and 17th\r\nAmazon Prime Day 2024 will take place on July 16th and 17th\r\n / The two-day sales event will feature sharp discounts on thousands of produ… [+3455 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Fox Business"
  },
  "author": "Greg Wehner",
  "title": "Hooters shutters dozens of ‘underperforming’ restaurants, optimistic for future: reports - Fox Business",
  "description": "Hooters has reportedly shut down dozens of locations in places like Texas, Kentucky and Florida, citing concerns the stores were underperforming.",
  "url": "https://www.foxbusiness.com/markets/hooters-shutters-dozens-underperforming-restaurants-optimistic-future",
  "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/08/0/0/Hooters.jpg?ve=1&tl=1",
  "publishedAt": "2024-06-25T02:17:00Z",
  "content": "The Atlanta-based sports bar chain, Hooters, abruptly shuttered dozens of \"underperforming\" restaurants across the U.S., as it joins a growing list of eateries facing the harsh realities of inflation… [+2444 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Fox Business"
  },
  "author": "Greg Wehner",
  "title": "Costco CEO says 1 item is more important than everything else sold in the store - Fox Business",
  "description": "Costco CEO Ron Vachris said in an interview with Fortune that one item sold by the wholesale chain was more important than any other item in the store.",
  "url": "https://www.foxbusiness.com/markets/costco-ceo-says-1-item-more-important-than-everything-else-sold-store",
  "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2024/01/0/0/costco-card-in-hand.jpg?ve=1&tl=1",
  "publishedAt": "2024-06-25T00:48:00Z",
  "content": "Costco Wholesale’s deals on hot dogs, gasoline, and thousands of bulk items may seem like the best the chain has to offer, but according to the company’s CEO, one item sold trumps everything else ins… [+3179 chars]"
  },
  {
  "source": {
  "id": "bloomberg",
  "name": "Bloomberg"
  },
  "author": "David Carnevali, Julie Johnsson",
  "title": "Boeing Bid for Spirit Aero Values 737 Supplier at $35 Per Share - Bloomberg",
  "description": "Boeing Co. has offered to acquire Spirit AeroSystems Holdings Inc. in a deal funded mostly by stock that values the key supplier at about $35 per share, according to people familiar with the matter.",
  "url": "https://www.bloomberg.com/news/articles/2024-06-25/boeing-bid-for-spirit-aero-values-737-supplier-at-35-per-share",
  "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iHrc.YF2md9c/v0/1200x800.jpg",
  "publishedAt": "2024-06-25T00:42:00Z",
  "content": "Boeing Co. has offered to acquire Spirit AeroSystems Holdings Inc. in a deal funded mostly by stock that values the key supplier at about $35 per share, according to people familiar with the matter.\r… [+218 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "PBS"
  },
  "author": "William Brangham, Courtney Norris, Karina Cuevas",
  "title": "Cyberattack on software company disrupts business at thousands of car dealerships - PBS NewsHour",
  "description": "Thousands of car dealers across North America have been forced to revert to pen and paper after a software company they rely on was hit by several cyberattacks. The outage has not only caused delays and inconveniences for customers, but has also raised major …",
  "url": "https://www.pbs.org/newshour/show/cyberattack-on-software-company-disrupts-business-at-thousands-of-car-dealerships",
  "urlToImage": "https://d3i6fh83elv35t.cloudfront.net/static/2024/06/cyber-1024x683.jpg",
  "publishedAt": "2024-06-25T00:38:17Z",
  "content": "William Brangham:\r\nSince very little has been publicly said about who hacked this system, whether the attackers are demanding a ransom and when the system might return to normal, we thought it's a go… [+1289 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Motley Fool"
  },
  "author": "Johnny Rice",
  "title": "Chipotle's 50-for-1 Stock Split Is Coming. Here's What Investors Need to Know - The Motley Fool",
  "description": "A historic stock split is coming for this fast-casual favorite.",
  "url": "https://www.fool.com/investing/2024/06/24/chipotles-50-for-1-stock-split-is-coming-heres-wha/",
  "urlToImage": "https://g.foolcdn.com/editorial/images/781232/gettyimages-1369045598.jpg",
  "publishedAt": "2024-06-25T00:17:00Z",
  "content": "A historic stock split is coming for this fast-casual favorite.High-profile stock splits are en vogue, it seems. Just days after Nvidia split its shares 10-for-1, Broadcom announced it would follow s… [+3637 chars]"
  },
  {
  "source": {
  "id": "google-news",
  "name": "Google News"
  },
  "author": "Reuters",
  "title": "China wants EU to scrap EV tariff plans as talks start - Reuters",
  "description": null,
  "url": "https://news.google.com/rss/articles/CBMidWh0dHBzOi8vd3d3LnJldXRlcnMuY29tL21hcmtldHMvY2hpbmEtd2FudHMtZXUtc2NyYXAtZXYtdGFyaWZmcy1ldnMtYnktanVseS00LWNoaW5lc2Utc3RhdGUtbWVkaWEtcmVwb3J0cy0yMDI0LTA2LTI0L9IBAA?oc=5",
  "urlToImage": null,
  "publishedAt": "2024-06-24T23:42:18Z",
  "content": null
  },
  {
  "source": {
  "id": null,
  "name": "WPVI-TV"
  },
  "author": "6abc Digital Staff, Walter Perez",
  "title": "Storm, understaffing blamed for dozens of American Airline cancellations, delays at PHL - WPVI-TV",
  "description": "Kayla Hayden was supposed to fly to Seattle on Sunday to catch an ocean cruise to Alaska with her family that sails off on Tuesday. Not only is she unsure if she'll make it, she has no idea where her luggage is.",
  "url": "https://6abc.com/post/philadelphia-weather-blamed-dozens-airline-cancellations-baggage-issues/14994765/",
  "urlToImage": "https://cdn.abcotvs.com/dip/images/14997057_062424-wpvi-travel-troubles-walter-5pm-CC-vid.jpg?w=1600",
  "publishedAt": "2024-06-24T23:39:32Z",
  "content": "PHILADELPHIA (WPVI) -- Dozens of flights were canceled and delayed at Philadelphia International Airport on Sunday.\r\nThe vast majority of these were American Airlines flights.\r\nMany people ended up c… [+2065 chars]"
  },
  {
  "source": {
  "id": "associated-press",
  "name": "Associated Press"
  },
  "author": "ASSOCIATED PRESS",
  "title": "TSA says it screened a record of nearly 3 million people Sunday, and bigger crowds are on the way - The Associated Press",
  "description": "If you think airports are crowded this summer, it's not your imagination. The TSA says it screened a record number of travelers on Sunday — just under 3 million people. The TSA expects to break the 3 million mark on Friday, as many Americans get an early star…",
  "url": "https://apnews.com/article/travel-record-tsa-airports-summer-holiday-d0b289878cd23cc2c4044ba6b36d0de7",
  "urlToImage": "https://dims.apnews.com/dims4/default/e5faad1/2147483647/strip/true/crop/4000x2250+0+208/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fbe%2F43%2F8db1c08243dc25b5367617d8705f%2F6d08a4dc7e764cdb9dad965e87ccd38c",
  "publishedAt": "2024-06-24T23:16:00Z",
  "content": "The number of air travelers moving through U.S. airports hit a record Sunday, and the new mark might not last through next weekend. \r\nThe Transportation Security Administration said it screened nearl… [+1011 chars]"
  },
  {
  "source": {
  "id": "fortune",
  "name": "Fortune"
  },
  "author": "Prarthana Prakash",
  "title": "PwC survey: Next Great Resignation wave driven by overworked, underpaid employees - Fortune",
  "description": "The \"Great Resignation\" never really ended. But now, employees' challenges include them being overworked, underpaid and not ready for AI.",
  "url": "https://fortune.com/europe/2024/06/24/great-resignation-2-0-employees-feel-overworked-underpaid-pwc-hope-fears-survey/",
  "urlToImage": "https://fortune.com/img-assets/wp-content/uploads/2024/06/GettyImages-1406551774-e1719241409569.jpg?resize=1200,600",
  "publishedAt": "2024-06-24T23:01:00Z",
  "content": "More people are now mulling their options as they increasingly feel overworked and underpaid amid relentless cost pressures. \r\nEmployees feel so bogged down by work that far more people are consideri… [+4252 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Yahoo Entertainment"
  },
  "author": "Reuters Videos",
  "title": "Dow closes at a one-month high; Nvidia drops - Yahoo Finance",
  "description": "STORY: U.S. stocks ended mixed on Monday, with the blue-chip Dow rallying to a one-month high as investors rotated out of AI-related stocks and added some of...",
  "url": "https://finance.yahoo.com/video/dow-closes-one-month-high-225835860.html",
  "urlToImage": "https://media.zenfs.com/en/video.reutersnews.com/448844a4c4f01c3c00b585de3b3ee44c",
  "publishedAt": "2024-06-24T22:58:35Z",
  "content": "STORY: U.S. stocks ended mixed on Monday, with the blue-chip Dow rallying to a one-month high as investors rotated out of AI-related stocks and added some of this year's laggards.\r\nThe Dow climbed ne… [+1694 chars]"
  }
  ]
let maxPage;
export default class News extends Component {
  constructor(){
    super();
    this.state={
      articles:articles,
      page:1,
      pageSize:20
    }
  }
  
    componentDidMount = async (page)=>{
    console.log("current page=>",this.state.page);
    const url = `https://newsapi.org/v2/everything?q=business&sortBy=popularity&apiKey=691e4ff22f7b4f5b8815ad7411d86bab&page=${page}&pageSize=${this.state.pageSize}`
    let data = await fetch(url)
    data= await data.json();
    maxPage = (data.totalResults)/100;
    this.setState({articles:data.articles}) 
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
      <h1 className='text-center'> HOT NEWS</h1>
      <div className='d-flex flex-row mb-3 flex-wrap justify-content-md-evenly'>
        {this.state.articles.map((element)=>{
          if(!element.title.includes("Removed")){
            return(
              <div key={element.url} className="p-2" style={{margin:"1rem",}}>
                <div className="col md-4 my-3" style={{margin:"1rem"}}>
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
