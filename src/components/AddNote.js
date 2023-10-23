import React, { useState } from 'react'

const AddNote = ({handleAddNote}) => {
  const [notetext , setnotetext] = useState('')

  const characterLimit = 200;

  const handleChange = (event)=>{
    if(characterLimit - event.target.value.length >= 0)
   { setnotetext(event.target.value)}

  }

  const handlesave = ()=>{
    if(notetext.trim().length >0)
    {
      handleAddNote(notetext)
      setnotetext('');
    }
  }

 

  return (
    <>
      <div className='note new'>
        <textarea rows='8' cols='10' value={notetext} placeholder='Type here.....' onChange={handleChange}/>
        <div className='note-footer'>
            <small>{characterLimit - notetext.length} Remaining</small>
            <button className='save' onClick={handlesave}>Save</button>
        </div>
      </div>

    </>
  )
}

export default AddNote
