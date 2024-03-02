import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes"));
    if (storedNotes) {
      setNotes(storedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function addNote(newNote){
    setNotes((prevNotes) =>{
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id){
    setNotes((prevNotes) =>{
      return prevNotes.filter((noteItems, index) =>{
        return index !== id ;
      })
    })
  }
  

  return (
    <div>
      <Header />
      <CreateArea 
      onAdd = {addNote}
      />
      { notes.map((noteItems, index) => {
        return <Note
        key = {index}
        id = {index}
        title = {noteItems.title}
        content = {noteItems.content}
        onDelete = {deleteNote}
        />
      }) }
      <Footer />
    </div>
  );
}

export default App;
