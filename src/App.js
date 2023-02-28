import './App.css';
import React from 'react';
import BoxInfo from './components/BoxInfo';
import Input from './components/Input';
import List from './components/List';

class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {list: [], in: 0, out: 0, tot: 0}
    this.setList = this.setList.bind(this)
    this.getItem = this.getItem.bind(this)
  }

  setList(list){
    this.setState((state)=>{
      return{list}
    })
  }

  getItem(item){
    if(item.type === 'in'){
      this.setState((state)=>{
          let value = state.in + parseFloat(item.value)
          return{in: value, tot: state.tot + parseFloat(item.value)}
      })
    }else{
      this.setState((state)=>{
        let value = state.out + parseFloat(item.value)
        return{out: value, tot: state.tot - parseFloat(item.value)}
    })
    }
  }

  render(){
    return(
      <div className="app">
        <div>
          <div className='painel'>
            <BoxInfo title="Entradas" icon="ph-arrow-circle-up" in={(this.state.in).toFixed(2)}></BoxInfo>
            <BoxInfo title="Saídas" icon="ph-arrow-circle-down" in={(this.state.out).toFixed(2)}></BoxInfo>
            <BoxInfo title="Total" icon="ph-currency-dollar-simple" in={(this.state.tot).toFixed(2)}></BoxInfo>
          </div>
          <Input getList={this.setList} getItem={this.getItem}></Input>
          <List list={this.state.list}></List>
        </div>
      </div>
    );
  } 
    
}

export default App;
