import React from 'react'

export default function PropsExample({name,age,hobbies=[]}) {
  return (
    <>
        <p>{name}</p>  /
        <p>{age}</p>
        <ul>
            <li>
                {hobbies.map((hobbies,index)=>{
                    return<li key={index}>{hobbies}</li>
                })}
            </li>
        </ul>
    </>
  )
}

/* OR
import React from 'react'

export default function PropsExample(props) {
    {
  return (
    <>
        <p>{props.name}</p>  /
        <p>{props.age}</p>
        <ul>
            <li>
                {props.hobbies.map((hobbies,index)=>{
                    return<li key={index}>{hobbies}</li>
                })}
            </li>
        </ul>
    </>
  )
}
*/