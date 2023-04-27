import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn:true
        }
    }
  render() 
  {
 
    // let message
    // if(this.state.isLoggedIn){
    //     message =<div>Welcome Misbah</div>
    // }else{
    //     message = <div>Welcome Guest</div>
    // }
    // return <div>{message}</div>

    if(this.state.isLoggedIn){
        return<div>welcome misbah</div>
    }else{
        return <div>welcome guest</div>
    }

    // return (
    //   <div>
    //     <div>welcome misbah</div>
    //     <div>welcome guest</div>
    //   </div>
    // )
  }
}

export default UserGreeting
