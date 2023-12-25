import React, { Component } from 'react'
import NewsItem from '../NewsItem'

export class News extends Component {
    
        // will run at first as usual, then render will run, then component did mount(cdm  )
    constructor(){
        super();
        console.log("Bolo Hare Krishna...")
        this.state = {
    //    articles: this.articles, // hardcoded links are removed
        articles:[],
       loading: false,
       page:1
    }
    }

    
    //for how below cmd is not working 
    // is a lifecycle method, // will run after render below(content)
    async componentDidMount(){  
        // let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=9e83c367fb45465aa1cd3d128ec2490e";
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7db5facefeb246e1838ac72e9b7864b3";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        // this.setState(this.articles=parsedData.articles);
        this.setState({ articles: parsedData.articles });

    }

    handlePrevClick=() =>{
        console.log("Previous");
    }

    handleNextClick=() =>{
        console.log("Next");
    }

    render() {
        return (
            <div className='container my-3 d-flex flex-column justify-content-between'>
                <h1>NewsMonkey - Top HeadLines</h1>
                <div className="row">
                {this.state.articles.map((element) => {
                  return  <div className="col-md-4 my-4" key={element.url}>
                        <NewsItem title={element.title?.slice(0,45)} description={element.description?.slice(0,88)} imageUrl={element.urlToImage} newsUrl = {element.url}  />
                    </div>
                })}
                </div>
                <div className="container d-flex justify-content-between mt-3">
                <button type="button" className="btn btn-lg ml-auto mx-2 btn-dark" onClick={this.handlePrevClick}> &laquo; Previous</button>
                <button type="button" className="btn btn-lg mr-5 mx-2 btn-dark" onClick={this.handleNextClick}> Next &raquo;</button>
                </div>
                </div>
                )
  }
}

                export default News











