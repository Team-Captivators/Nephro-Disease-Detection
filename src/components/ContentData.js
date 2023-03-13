import { Component } from "react";
import "./Content.css";
import S001 from "../images/S001.png";
import S002 from "../images/S002.png";
import S003 from "../images/S003.png";

class ContentData extends Component{
    render(){
        return(
            <div className={this.props.className}>
                <div className="des-text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                </div>
                <div className="image">
                    <img alt="img" src={this.props.img1}/>
                </div>
            </div>
        );
    }
}

export default ContentData;