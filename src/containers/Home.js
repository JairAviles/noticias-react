import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

import api from './../api';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sources: []
        };
        this.getSources = this.getSources.bind(this);
    }

    componentDidMount(){
        this.getSources();
      }

    async getSources(){
        let response = await api.getSources();
        this.setState({
          sources: response.sources
        });
    
      } 

    render() {
        return (
            <div>
                {
                this.state.sources.map((source) =>
                //cada cosa iterable debe tener un key
                    <div className="container" key={source.id}>
                    <div className="row">
                        <div className="col s12 l12">
                        <div className="card-panel white">
                            <span className="black-text">
                            {source.description}
                            </span>
                            <br/>
                            <NavLink to={`/articles/${source.id}`}>{source.name}</NavLink>
                        </div>
                        </div>
                    </div>
                    </div>
                )
                }
            </div>
        );
    }
}

export default Home;