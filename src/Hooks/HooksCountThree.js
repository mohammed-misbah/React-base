import React,{useState} from 'react'

function HooksCountThree() {
    const [name,setName] = useState({firstName:'',lastName:''})
  return (
    <div>
      <input type="text" 
      value={name.firstName} 
      onChange={e => setName({...name,firstName:e.target.value})}/>
      <input type="text"
      value={name.lasttName}
      onChange={e => setName({...name,lastName:e.target.value}) }/>
      <h3>FIRST NAME :{name.firstName}</h3>
      <h3>LAST NAME :{name.lastName}</h3>
    </div>
  )
}

export default HooksCountThree
