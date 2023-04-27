import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            parentName:'Parent'
        }
        this.greetparent = this.greetparent.bind(this)
    }
    greetparent(childNmae){
        alert(`Hello ${this.state.parentName} from ${childNmae}`)
        // message:(`hello ${this.state.parentName}`)
    }
  render() {
    return (
        <div>
            <ChildComponent greetHandler={this.greetparent}/>
        </div>
    )
  }
}

export default ParentComponent
