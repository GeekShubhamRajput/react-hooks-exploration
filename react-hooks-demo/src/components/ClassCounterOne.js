import {Component} from 'react'

class ClassCounterOne extends Component{
  constructor(props){
    super(props)
    
    this.state = {
      count: 0
    }
  }

  componeDidMount(){
    document.title = `Clicked ${this.state.count} times`   
  }

  componeDidUpdate(prevProps, prevState){
    document.title = `Clicked ${this.state.count} times`
  }

  render(){
    return(
      <>
        <span>Class Component Count : {this.state.count}</span><br /><br />
        <button onClick={() => this.setState({count: this.state.count + 1})}>Increament 1</button>
        <hr /><br />
      </>
    )
  }
}

export default ClassCounterOne
