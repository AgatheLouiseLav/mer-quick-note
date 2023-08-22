export default function Note({note, index}) {
	return (
		<div>
			<h1>{note}</h1> <p>{index + 1}</p>
		</div>
	)
}