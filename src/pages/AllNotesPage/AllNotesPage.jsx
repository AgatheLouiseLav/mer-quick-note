import { useState,useEffect } from "react";
import NewNoteForm from "../../components/NewNoteForm/NewNoteForm";
import Note from "../../components/Note/Note";
import * as noteAPI from '../../utilities/note-api';
import { getUser } from "../../utilities/users-service";



export default function AllNotesPage() {

	 const [notes, setNotes] = useState([]);
	 useEffect(function() {
    	async function getNotes() {
        const notes = await noteAPI.getAll(getUser()._id);
        setNotes(notes);
  	}
  	getNotes()
	},[]);

	const noteItems = notes.map((n) =>(
		<Note note={n} key={n._id} />
	));

	return (
		<>
			<NewNoteForm />
			<hr />
			{noteItems}
		</>
	)
}