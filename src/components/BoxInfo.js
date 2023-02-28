import React from "react";
import './BoxInfo.css';


class BoxInfo extends React.Component{  

    render(){
        return(
            <div className="boxInfo">
                <div>
                    <span className="title">{this.props.title}</span>
                    <i className={this.props.icon}></i>
                </div>
                <h2 className="value"> <span id="cifrao">R$</span><span id="value">{this.props.in}</span></h2>
            </div>
        )
    }
}

export default BoxInfo