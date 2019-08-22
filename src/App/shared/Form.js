import React, { Component } from "react";
import {connect } from "react-redux";
import { getSelectComic } from "../../redux/comic";
import "../index.css";

class Form extends Component{
    constructor(props){
        super(props);
          
        this.state = {
            inputs: {
                number: ""
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e){
        let {name, value} = e.target;
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        })
    }
    
    handleSubmit(e) {
        e.preventDefault();
        const number = this.state.inputs.number;
        this.props.getSelectComic(number);
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit} >
                    <input name="number" onChange={this.handleChange} className="input"/>
                    <button className="button"> Enter </button>
                </form>
            </div>
        )
    }
}


 

export default connect(state => state, { getSelectComic })(Form);
