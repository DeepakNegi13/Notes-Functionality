import { useState } from "react";
import axios from "axios";
function App() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [notes, setNotes] = useState([]);
	axios.get("http://localhost:3000/notes").then((response) => {
		setNotes(response.data.notes);
	});
	function handleSubmit(event) {
		event.preventDefault();
		axios.post("http://localhost:3000/notes", {
			title: title,
			description: description,
		});
		const trimmedTitle = title.trim();
		const trimmedDescription = description.trim();

		if (!trimmedTitle || !trimmedDescription) return;

		setNotes((currentNotes) => [
			{
				id: Date.now(),
				title: trimmedTitle,
				description: trimmedDescription,
			},
			...currentNotes,
		]);
		setTitle("");
		setDescription("");
	}

	return (
		<main className="notesBody">
			<section className="notesShell" aria-labelledby="page-title">
				<header className="pageHeader">
					<div>
						<p className="eyebrow">Personal notes</p>
						<h1 id="page-title">Keep your thoughts close.</h1>
						<p className="pageIntro">
							Capture an idea, a reminder, or anything worth
							returning to.
						</p>
					</div>
					<div
						className="noteCount"
						aria-label={`${notes.length} notes saved`}>
						<strong>{notes.length}</strong>
						<span>
							{notes.length === 1 ? "note" : "notes"} saved
						</span>
					</div>
				</header>

				<div className="contentGrid">
					<form className="noteForm" onSubmit={handleSubmit}>
						<div className="formHeading">
							<span className="formIcon" aria-hidden="true">
								+
							</span>
							<div>
								<h2>Write a new note</h2>
								<p>
									Give your thought a name and a little
									context.
								</p>
							</div>
						</div>

						<label htmlFor="note-title">Title</label>
						<input
							id="note-title"
							type="text"
							value={title}
							onChange={(event) => setTitle(event.target.value)}
							placeholder="What is on your mind?"
							maxLength={80}
							required
						/>

						<label htmlFor="note-description">Description</label>
						<textarea
							id="note-description"
							value={description}
							onChange={(event) =>
								setDescription(event.target.value)
							}
							placeholder="Add the details you want to remember..."
							rows={7}
							maxLength={500}
							required
						/>

						<div className="formFooter">
							<span>{description.length}/500</span>
							<button type="submit">
								Save note{" "}
								<span aria-hidden="true">&#8594;</span>
							</button>
						</div>
					</form>

					<section
						className="notesList"
						aria-labelledby="notes-heading">
						<div className="listHeading">
							<div>
								<p className="eyebrow">Your collection</p>
								<h2 id="notes-heading">Recent notes</h2>
							</div>
							{notes.length > 0 && (
								<span className="listStatus">Just now</span>
							)}
						</div>

						{notes.length === 0 ?
							<div className="emptyState">
								<span className="emptyIcon" aria-hidden="true">
									✦
								</span>
								<h3>Your notes will appear here</h3>
								<p>
									Start with the thought that keeps coming
									back.
								</p>
							</div>
						:	<div className="noteCards">
								{notes.reverse().map((note) => (
									<article className="noteCard" key={note.id}>
										<span
											className="cardMark"
											aria-hidden="true"
										/>
										<h3>{note.title}</h3>
										<p>{note.description}</p>
									</article>
								))}
							</div>
						}
					</section>
				</div>
			</section>
		</main>
	);
}

export default App;
