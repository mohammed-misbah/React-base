import React, { Component } from 'react'

export class LifecycleB extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:'Misbah'
        }
        console.log('Lyifecycle B constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('Lyifecycle B getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('Lyifecycle B componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('Lifecycle B shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log('Lifecycle B getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('Lifecycle B componentDidUpdate')
    }
  render() {
    console.log('Lyifecycle B render')
    return (
      <div>
        Lyifecycle B
      </div>
    )
  }
}

export default LifecycleB
