
import React from 'react'

const Greet = props => {
    const {name} = props
    console.log()
    return(
    <div>
        
     <h1>Greet {name}</h1>
    
     {/* {children} */}
     </div>
    )
}


export default Greet