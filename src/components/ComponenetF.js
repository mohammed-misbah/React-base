import React, { Component } from 'react'
import { UserConsumer } from './useContext'

 class ComponenetF extends Component {
  render() {
    return (
     <UserConsumer>
        {
            username => {
                return <div>Hello {username}</div>
            }
        }
     </UserConsumer>
    )
  }
}

export default ComponenetF
