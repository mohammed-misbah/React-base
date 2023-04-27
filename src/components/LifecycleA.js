import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

export class LifecycleA extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:'Misbah'
        }
        console.log('Lifecycle A constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('lifecycle A getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('Lifecycle A componentDidMount')
    }
    shouldComponentUpdate(){
      console.log('Lifecycle A shouldComponentUpdate')
      return true
    }
    getSnapshotBeforeUpdate(){
      console.log('Lifecycle A getSnapshotBeforeUpdate')
      return null
    }
    componentDidUpdate(){
      console.log('Lifecycle A componentDidUpdate')
    }
    changeState = () =>{
      this.setState({
        name:'Codevolution'
      })
    }

  render() {
    console.log('lifecycle A render')
    return (
      <div>
        <div>lifecycle A</div>
        <button onClick={this.changeState}>Change State</button>
        <LifecycleB/>
      </div>
    )
  }
}

export default LifecycleA
