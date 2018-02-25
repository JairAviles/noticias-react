import React, { Component } from 'react';
import api from '../api';

class Articles extends Component {
  constructor(props){
    super(props);
    this.state = {
      articles: [],
      sourceId: ''
    }
    this.getArticles = this.getArticles.bind(this);
  }

  componentDidMount(){
    this.getArticles();
  }

  async getArticles(){
    let response = await api.getArticlesBySource(this.props.match.params.source_id)
    this.setState({
      articles: response.articles,
      sourceId: response.source
    })
  }

  render() {
    return (
      <article className="Articles container">
      <br/>
      <a href="javascript:void(0);history.back();">
        <button className="btn btn-info">Volver</button>
      </a>
        <header>
          <h1 className="center-align">{this.state.sourceId}</h1>
        </header>  
        <div className="row">
        {
          this.state.articles.map((article)=>
          <div className="col s12 m6" key={article.title}>
            <div className="card">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" alt={article.title} src={article.urlToImage}/>
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4 truncate">{article.title}<i className="material-icons right">more_vert</i></span>
                <p><a href={article.url} target="_blank">See more</a></p>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">{article.title}<i className="material-icons right">close</i></span>
                <p>{article.description}</p>
              </div>
            </div>

          </div>
        )}
        </div>
      </article>
    );
  }
}

export default Articles;