# Notes Backend System

A simple REST API built with Node.js and Express for creating, reading, updating, and deleting notes.

## Features

- Create notes with `POST /notes`
- List all notes with `GET /notes`
- Update a note with `PATCH /notes/:id`
- Delete a note with `DELETE /notes/:id`
- JSON request body support through Express middleware

## Requirements

- Node.js 18 or later
- npm

## Installation

1. Install the dependencies:

    ```bash
    npm install
    ```

2. Start the server:

    ```bash
    node server.js
    ```

    The API is available at `http://localhost:3000`.

### Development mode

Use nodemon to restart the server automatically while developing:

```bash
npm run dev
```

## API Reference

### Create a note

```http
POST /notes
Content-Type: application/json
```

Example request body:

```json
{
	"title": "Learn Express",
	"description": "Build a notes API"
}
```

Notes are stored in memory for the lifetime of the server process.

### Get all notes

```http
GET /notes
```

Example response:

```json
{
	"remarks": "notes send successfully",
	"notes": [
		{
			"title": "Learn Express",
			"description": "Build a notes API"
		}
	]
}
```

### Update a note

```http
PATCH /notes/:id
Content-Type: application/json
```

Replace `:id` with the note's zero-based array index.

Example:

```http
PATCH /notes/0
```

### Delete a note

```http
DELETE /notes/:id
```

Replace `:id` with the note's zero-based array index.

Example response:

```json
{
	"message": "Note deleted successfully"
}
```

## Project Structure

```text
notes-Backend-System/
├── server.js       # Starts the Express server
├── src/
│   └── app.js      # Express application and note routes
├── package.json    # Project metadata and scripts
└── README.md       # Project documentation
```

## Current Limitations

- Notes are stored only in memory and are lost when the server restarts.
- There is no database or authentication layer.
- The API currently does not validate note fields or return detailed errors for invalid note IDs.
- The `PATCH` handler currently reads the description from the request object instead of the JSON request body, so update behavior needs further implementation.
- The test script is not implemented yet.
