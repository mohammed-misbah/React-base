import React, { Component } from 'react'

class ClassCLick extends Component {
    // constructor(){
    //     super()
    //     this.state=  {
    //         message:"error"
    //     }
    // }
    click(){
        console.log("You where clicked the button")
    }
  render(){
    return (
      <div>
      <button onClick={this.click}>Click me</button>
       </div>
  )
}
}

export default ClassCLick
