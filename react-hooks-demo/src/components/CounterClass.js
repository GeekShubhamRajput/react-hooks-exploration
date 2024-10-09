import React, { Component } from 'react'

class CounterClass extends Component{
  constructor(props){
    super(props)

    this.state = {
      count: 0
    }
  }
  
  incrementHandler =()=>{
    this.setState({count: this.state.count + 1})
  }

  render(){
    return(
      <div>
        <span>Count - {this.state.count}</span><br /><br />
        <button onClick={this.incrementHandler}>Increment 1</button><br /><br />
      </div>
    )
  }
}

export default CounterClass
