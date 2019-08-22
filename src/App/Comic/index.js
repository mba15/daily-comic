import React, { Component } from "react"
import { connect } from "react-redux";
import { getComic } from "../../redux/comic.js";

class Comic extends Component {
  
    componentDidMount() {
        this.props.getComic();
      
    }
    render() {
        return (
            <div className="comic">
                <h4>{this.props.comic.data.title}</h4>
                <img src={this.props.comic.data.img} alt="Comic"/>
            </div>
        )
    }
}

export default connect(state => state, { getComic })(Comic);