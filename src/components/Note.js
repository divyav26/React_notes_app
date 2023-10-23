import React from 'react'
import {AiFillDelete } from "react-icons/ai";

const Note = ({id,text,date,handleDeleteNode}) => {
  return (
    <div className='note'>
        <span> {text}</span>
        <div className='note-footer'>
            <small>{date}</small>
            <AiFillDelete className='delete' onClick={()=>handleDeleteNode(id)} size='1.3em'/>
        </div>   
    </div>
  )
}

export default Note
