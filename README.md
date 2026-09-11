# Notes Backend System

A simple REST API built with Node.js, Express, and MongoDB for creating, reading, updating, and deleting notes.

## Features

- Create notes with `POST /notes`
- List all notes with `GET /notes`
- Update a note with `PATCH /notes/:id`
- Delete a note with `DELETE /notes/:id`
- JSON request body support through Express middleware
- Persistent note storage with MongoDB through Mongoose

## Requirements

- Node.js 18 or later
- npm
- A running MongoDB instance or MongoDB Atlas cluster

## Installation

1. Install the dependencies:

    ```bash
    npm install
    ```

2. Create a `.env` file in the project root and add your MongoDB connection string:

    ```env
    MONGODB_URI=mongodb://127.0.0.1:27017/notes
    ```

    For MongoDB Atlas, replace the value with your Atlas connection string.

3. Start the server:

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

The note is stored in MongoDB and the created document is returned in the response.

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

Replace `:id` with the note's MongoDB document ID.

Example:

```http
PATCH /notes/0
```

### Delete a note

```http
DELETE /notes/:id
```

Replace `:id` with the note's MongoDB document ID.

Example response:

```json
{
	"message": "Note deleted successfully"
}
```

## Project Structure

```text
notes-Backend-System/
├── server.js                # Connects to MongoDB and starts the server
├── src/
│   ├── app.js               # Express application and note routes
│   ├── config/
│   │   └── database.js      # MongoDB connection setup
│   └── models/
│       └── notes.models.js  # Mongoose note schema and model
├── package.json             # Project metadata and scripts
└── README.md                # Project documentation
```

## Current Limitations

- The `PATCH` handler is not yet fully connected to MongoDB and currently reads the description from the request object instead of the JSON request body.
- There is no authentication layer.
- The API currently does not validate note fields or return detailed errors for invalid note IDs.
- The test script is not implemented yet.
