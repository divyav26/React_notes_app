import { useEffect, useState } from "react";
import {nanoid} from 'nanoid'
import NoteList from "./components/NoteList";
import Search from "./components/Search";
import Header from "./components/Header";
import '../src/style/allstyle.css'


function App() {

  const [search,setSearch] = useState('')

  const [notes,setNotes] = useState([ 
    {
      id:nanoid(),
      text:'this is my note',
      date:'30/12/2023'
    },

    {
      id:nanoid(),
      text:'this is my note',
      date:'30/12/2023'
    },

  

  ])

  const addNote = (text) =>{
    const date = new Date()
    const newNote = {
      id :nanoid,
      text:text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes,newNote];
    setNotes(newNotes)
  }


  const deleteNote = (id)=>{
    const newNotes =notes.filter((note) =>note.id !== id)
    setNotes(newNotes)
    
  }

  const [darkMode , setDarkMode] = useState(false);

  useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
    <div className="container">
      <Header handleDarkMode = {setDarkMode} />
      <Search handleSearch = {setSearch} />
        <NoteList 
        notes={notes.filter((note)=>note.text.toLocaleLowerCase().includes(search))} 
        handleAddNote = {addNote}
        handleDeleteNode = {deleteNote}
        />
    </div>
    </div>
      
    
  );
}

export default App;
