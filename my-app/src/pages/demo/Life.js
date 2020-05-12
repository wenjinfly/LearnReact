import React from 'react'
import Child from './Child'
export default class Life extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }
    
    handleAdd=()=>{
        this.setState(
            {count :this.state.count+1}
        )
    }
    handleClick(){
        this.setState(
            {count :this.state.count+1}
        )
    }
    render(){
        return <div>
            <p> React 生命周期介绍</p>
            <button onClick={this.handleAdd}>点一下</button>
            <button onClick={this.handleClick.bind(this)}>点一下</button>
            <p> {this.state.count}</p>
            <Child name="Jack"></Child>
        </div>
    }
}