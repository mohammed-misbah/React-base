import React, { Component } from 'react'

class classExmple extends Component {
    constructor(props){
        super(props)
        this.state ={
            count:0
        }
    }
    clickButton = () =>{
        this.setState({count : this.state.count + 1});
    }
  render() {
    return (
      <div>
        Counter:{this.state.count}
        <button onClick={this.clickButton}>Current Count is : {this.state.count} </button>
      </div>
    )
  }
}

export default classExmple
