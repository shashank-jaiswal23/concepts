import React, {Component} from 'react'

class App extends Component{
  state = {}

  render(){
    //babel will convert this jsx into React.createElement("div"). 
    return (
      <div>Hello class component</div>
    )
  }
}

export default App