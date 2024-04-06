import React, { useState } from 'react'

export default function UseState() {
    const [name , setName]= useState('Vamshi')
    const change=()=>{
      setName("vicky vicky") ;
    }
   
  return (
    <>
    <h1>hellooooooo bharathhhhhhhh</h1>
    Name:{name}
    <button onClick={change}>change</button>
    </>
  )
}
