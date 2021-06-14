import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  // the useState hook for updating the list of notes on UI
  // useState() takes in initial state as parameter
  // returns an array containing the state and a setState function
  const [list, setList] = useState([]);

  // function addNote that adds a created note to list of notes
  // takes in a note from the createArea component
  const addNote = (note) => {
    setList((prevValue) => {
      return [...prevValue, note];
    });
  };

  // function deleteNote deletes a note from list of notes
  // takes in the note's id
  const deleteNote = (id) => {
    setList((prevValue) => {
      return prevValue.filter((element, index) => {
        return index !== id;
      });
    });
  };

  // function to create a single Note component
  const createNote = (noteItem, index) => {
    return (
      <Note
        onDelete={deleteNote}
        key={index}
        id={index}
        title={noteItem.title}
        content={noteItem.content}
      />
    );
  };

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {list.map(createNote)}

      <Footer />
    </div>
  );
}

export default App;
