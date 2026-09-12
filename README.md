# Notes Backend System

A full-stack notes application with a React frontend and an Express/MongoDB backend. Create notes with a title and description, then view the saved notes in the frontend.

## Features

- Add notes from the React interface
- Load saved notes from MongoDB
- REST API for creating, reading, updating, and deleting notes
- CORS enabled for frontend-backend development

## Tech Stack

- **Frontend:** React 19, Vite, Axios
- **Backend:** Node.js, Express, Mongoose, MongoDB

## Project Structure

```text
notes-Backend-System/
├── Backend/
│   ├── server.js
│   └── src/
│       ├── app.js
│       ├── config/database.js
│       └── models/notes.models.js
└── frontend/
		├── index.html
		└── src/
				├── App.jsx
				└── index.css
```

## Requirements

- Node.js 18 or newer
- MongoDB running locally or a MongoDB connection string

## Getting Started

### 1. Configure the backend

```bash
cd Backend
npm install
```

Create a `.env` file in `Backend/` when using a MongoDB connection string:

```env
MONGODB_URI=mongodb://127.0.0.1:27017/notes
```

The backend uses this local MongoDB URL by default when `MONGODB_URI` is not provided.

### 2. Start the backend

From the `Backend/` directory:

```bash
npm run dev
```

The API runs at `http://localhost:3000`.

### 3. Start the frontend

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## API Reference

| Method   | Endpoint     | Description               |
| -------- | ------------ | ------------------------- |
| `GET`    | `/notes`     | Return all notes          |
| `POST`   | `/notes`     | Create a note             |
| `PATCH`  | `/notes/:id` | Update a note description |
| `DELETE` | `/notes/:id` | Delete a note             |

Example request body for creating a note:

```json
{
	"title": "Project idea",
	"description": "Write down the next steps."
}
```

## Frontend Scripts

Run these commands from `frontend/`:

```bash
npm run dev      # Start the Vite development server
npm run build    # Create a production build
npm run lint     # Run ESLint
npm run preview  # Preview the production build
```

## Backend Scripts

Run these commands from `Backend/`:

```bash
npm run dev      # Start the backend with nodemon
```
