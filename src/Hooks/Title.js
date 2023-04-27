import React from 'react'

function Title() {
    console.log('Rendering a title');
  return (
    <h2>
      Use  callback Hook 
    </h2>
  )
}

export default React.memo(Title)
