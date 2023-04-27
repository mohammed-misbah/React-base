import React from 'react'
import Person from './Person'

function NameList() {
    const names =['John','Ali','Banath']
    const person = [
        {
            id :1,
            name:'Misba',
            age:21,
            skill:'React'
        },
        {
            id :2,
            name:'Clara',
            age:23,
            skill:'React'
        },
        {
            id :3,
            name:'Diana',
            age:20,
            skill:'React'
         }
        ]
    const NameList = names.map((names,index)=><h2 key={index}>{index}{names}</h2> )
  return(
  <div> {NameList} </div>
  )
}

export default NameList


// usign map to looping a certain variable's in a component