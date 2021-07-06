import React, {Component} from 'react'

class App extends Component{
  //state is an object containing data to be rendered
  state = {
    count: 0
  }
  render(){
    // let classes = "btn btn-";
    // classes+= this.state.count ===0 ? "danger" :"success"
    //convert above lines into classes by selecting and clicking right click and then click refractor and then "extract to method in class App"
    let classes = this.newMethod();
    //babel will convert this jsx into React.createElement("div"). 
    return (
      <div>
        <span >{this.formatCount()}</span>
        <button className={classes}>Increate</button>
      </div>
    )
  }

  newMethod() {
    let classes = "btn btn-";
    classes += this.state.count === 0 ? "danger" : "success";
    return classes;
  }

  formatCount(){
    return this.state.count===0 ? <h1>Zero</h1> : this.state.count
  }
}

export default App