import React from "react";
import './Input.css'

let itens = []

class Input extends React.Component{

    
    constructor(props){
        super(props)

        this.state = {desc: "", value:"", type:""}
        this.handleSaveInfo = this.handleSaveInfo.bind(this)
        this.getDesc = this.getDesc.bind(this)
        this.getValue = this.getValue.bind(this)
        this.getType = this.getType.bind(this)
    }

    getDesc(event){
        let desc = event.target.value;
        this.setState((state)=>{
            return{desc}
        })
    }

    getValue(event){
        let value = parseFloat(event.target.value).toFixed(2);
        this.setState((state)=>{
            return{value}
        })
    }

    getType(event){
        let type = event.target.value;
        this.setState((state)=>{
            return{type}
        })
    }

    handleSaveInfo(){
        let item = {
            desc: this.state.desc,
            value: this.state.value,
            type: this.state.type
        }
        
        document.querySelector("#desc").value = ' '
        document.querySelector("#v").value = ' '

        itens.unshift(item)
        this.props.getItem(item)
        this.props.getList(itens)
    }

    render(){
        return(
            <div className="input">
                <div className="textInput">
                    <span>Descrição:</span>
                    <input id="desc" type="text" className="userInput" onChange={(this.getDesc)}></input>
                </div>
                <div className="textInput">
                    <span>Valor:</span>
                    <input id="v" type="text" className="userInput" onChange={this.getValue}></input>
                </div>
                <div className="checkArea">
                    <div>
                        <input type="radio" id="entrada" value="in" name="type" onChange={this.getType}></input>
                        <label htmlFor="entrada">Entrada</label>
                    </div>
                    <div>
                        <input type="radio" id="saida" value="out" name="type" onChange={this.getType}></input>
                        <label htmlFor="saida">Saída</label>
                    </div>

                </div>
                <div>
                    <button onClick={this.handleSaveInfo}>Adicionar</button>
                </div>
            </div>
        )
    }
}

export default Input