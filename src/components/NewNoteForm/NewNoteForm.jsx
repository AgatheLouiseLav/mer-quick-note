import { useState } from "react";
import { createNote } from "../../utilities/note-api";

export default function NewNoteForm() {

	const [newNote, setNewNote] = useState({
		text: ''
  });

	 async function handleAddNote(evt) {
    	evt.preventDefault();
		try {
			const note = await createNote()
    			setNewNote(note);
		} catch (error) {
			 setError('Log In Failed - Try Again');
		}
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