import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

const Search = ({handleSearch}) => {
  return (
    <div className='search'>
        <AiOutlineSearch  className='search-icons' size='1.3rem'/>
        <input type='text' onChange={(event)=>handleSearch(event.target.value)} placeholder='search....'/>
    </div>
  )
}

export default Search
