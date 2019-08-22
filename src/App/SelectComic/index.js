import React, {  Component } from "react";
import { connect } from "react-redux";
import { getSelectComic, getComic } from "../../redux/comic.js"
import Form from "../shared/Form.js"

class SelectComic extends Component {
    constructor(props){
        super(props)
        this.state = {
            selectedComic: ""
        }
       
    }
    componentDidMount(){
        this.props.getComic();
    }
    
    
    render() {
        const maxNumber = this.props.comic.maxNum;
        return (
            <div className="selectComic">
                <p> Please enter a comic number to view 1 - <span>{maxNumber}</span> </p>
                <Form />
                <h4>{this.props.comic.data.title}</h4>
                <img src={this.props.comic.data.img} alt="Comic"/>
            </div>
        )
    }
}


 export default connect(state => state, { getComic, getSelectComic })(SelectComic);

