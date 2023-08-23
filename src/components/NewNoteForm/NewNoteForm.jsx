import { useState } from "react";
import * as noteAPI from '../../utilities/note-api';
import { getUser } from '../../utilities/users-service';

export default function NewNoteForm({addNote, getNotes}) {

	const [newNote, setNewNote] = useState("");

	 async function handleAddNote(evt) {
    	evt.preventDefault();
		const note = await noteAPI.createNote({text: newNote, user: getUser()._id});
		addNote(newNote);
    	setNewNote("");
		getNotes();
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