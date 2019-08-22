import React, { Component } from 'react'
import { connect } from "react-redux";
import { getRandomComic } from "../../redux/comic.js";

class RandomComic extends Component {
    

    componentDidMount() {
        
        this.props.getRandomComic();
       
    }


    render() {
        return (
            <div className="randomComic">
                <h3>{this.props.comic.data.title}</h3>
                <img src={this.props.comic.data.img} alt="Comic"/>
            </div>
        )
    }
}

export default connect(state => state, { getRandomComic })(RandomComic);
