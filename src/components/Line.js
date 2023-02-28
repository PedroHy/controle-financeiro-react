import React from "react";

class Line extends React.Component{
    
    
    defineIcon(){
        if(this.props.type === 'in'){
            return 'ph-arrow-circle-up'
        }else{
            return 'ph-arrow-circle-down'
        }
    }

    render(){

        return(
            <div className="line">
                <div>
                    <span>{this.props.desc}</span>
                </div>
                <div>
                    <span>{this.props.value}</span>
                </div>
                <div>
                <i className={this.defineIcon()}></i>
                </div>
                
            </div>
        )
    }
}

export default Line