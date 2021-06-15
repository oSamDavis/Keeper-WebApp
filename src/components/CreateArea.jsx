import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  // useState returns two things in an array:
  // the state and a function to setState
  const [note, setNote] = useState({ title: "", content: "" });

  //tracking the state of typing in the text content for UX rendering
  const [typing, setTyping] = useState(false);

  // function to display title field, will only be called if the user is typing a content
  const showTitle = () => {
    return (
      <input
        onChange={handleChange}
        name="title"
        placeholder="Title"
        value={note.title}
      />
    );
  };

  // function to handle change event in input and textarea fields
  const handleChange = (event) => {
    // get the name and new value by destructuring
    // the element that triggered the event
    const { name, value } = event.target;

    // use the setNote state function to update
    // the note object. Spread operator is used to get
    // previous object content and we update based on name of event
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  return (
    <div>
      <form className="create-note">
        {typing ? showTitle() : null}
        <textarea
          onClick={() => {
            // setting typing flag to true when text area gets clicked
            setTyping(true);
          }}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={typing ? "3" : "1"}
          value={note.content}
        />

        <Zoom in={typing}>
          <Fab
            onClick={(event) => {
              // passing our note to parent component via a prop function
              // also resetting both fields and avoid a default page refresh
              props.onAdd(note);
              setNote({ title: "", content: "" });
              event.preventDefault();
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
