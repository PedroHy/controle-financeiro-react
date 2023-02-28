import React from "react";
import './List.css'
import Line from "./Line";

class List extends React.Component{

    render(){
        return(
            <div className="list">
                <div id="header" className="line">
                    <div>
                        <span>Descrição</span>
                    </div>
                    <div>
                        <span>Valor</span>
                    </div>
                    <div>
                        <span>Tipo</span>
                    </div>
                    <div></div>
                </div>
                <div id="divider"></div>
                {this.props.list.map((item, index)=>{
                    return(
                        <Line key={index} desc={item.desc} value={item.value} type={item.type}></Line>
                    )
                })}
            </div>
        )
    }

}

export default List