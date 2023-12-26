import React, { useState } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import { Expand } from "@mui/icons-material";

function CreateArea(props) {

  const [isExpanded, setExpanded] = useState(false)

  function Expand() {
    setExpanded(true)

  }

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">

        {isExpanded ? (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        ) :null}

        <textarea
          name="content"
          onClick={Expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows= {isExpanded ? 3 : 2}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddCircleIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
