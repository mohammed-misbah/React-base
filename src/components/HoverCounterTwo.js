import React, { Component } from 'react'

export class HoverCounterTwo extends Component {
    constructor(props){
        super(props)
        this.state = {
          count:0
        }
      }
      incrementCount = () => {
        this.setState({
          count : this.state.count+1
        })
      }
  render() {
    const {count} = this.state
    return (
      <div>
        <h3 onMouseOver={this.incrementCount}>Hover {count}  times</h3>
      </div>
    )
  }
}

export default HoverCounterTwo
