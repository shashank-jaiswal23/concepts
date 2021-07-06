import React, {Component} from 'react'

class App extends Component{
  //state is an object containing data to be rendered
  state = {
    count: 0
  }

  render(){
    //babel will convert this jsx into React.createElement("div"). 
    return (
      <div>
        <span>{this.formatCount()}</span>
        <button className="btn btn-danger">Increate</button>
      </div>
    )
  }

  formatCount(){
    return this.state.count===0 ? <h1>Zero</h1> : this.state.count
  }
}

export default App