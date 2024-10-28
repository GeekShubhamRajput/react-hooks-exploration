import { Component } from "react"

class ClassTimer extends Component{
  constructor(props){
    super(props)

    this.state = {
      timer: 0
    }
  }

  componentDidMount(){
    this.interval = setInterval(() => {
      this.setState(prevState => ({timer: prevState.timer + 1}))
    }, 1000)
  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }

  render(){
    return(
      <div>
        <span>Class Timer : {this.state.timer}</span><br /><br />
        <button onClick={() => clearInterval(this.interval)}>Clear Interval</button>
        <br /><br />
      </div>
    )
  }
}

export default ClassTimer
