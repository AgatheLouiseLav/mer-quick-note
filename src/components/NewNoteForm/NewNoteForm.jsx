import { useState } from "react";

export default function NewNoteForm({addNote}) {
	const [newNote, setNewNote] = useState("");

	 function handleAddNote(evt) {
    	evt.preventDefault();
    	addNote(newNote);
    	setNewNote("");
  	}
	
	return(
		<form onSubmit={handleAddNote}>
			<h2>New note</h2><br/>
			<input 
				value={newNote}
				onChange={(evt) => setNewNote(evt.target.value)}
				placeholder="New Note"
				required
				pattern=".{4,}"/>
				<button type="submit">Add Note</button>
		</form>
	);
}