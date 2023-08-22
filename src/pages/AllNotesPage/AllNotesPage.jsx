import NewNoteForm from "../../components/NewNoteForm/NewNoteForm";
import Note from "../../components/Note/Note";


export default function AllNotesPage({ notes, setNotes }) {
	function addNote(note) {
    	setNotes([...notes, note]);
 	 }
	const noteItems = notes.map((n, idx) =>(
		<Note note={n} key={idx} index={idx}/>
	));
	return (
		<>
			<NewNoteForm addNote={addNote}/>
			<hr />
			{noteItems}
      		
		</>
	)
}