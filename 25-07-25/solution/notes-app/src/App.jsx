// App.jsx
import React, { useState } from 'react';
import { Box } from '@mui/material';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Notes from './components/Notes';
import notesbg from './assets/notesbg.png';

export default function App() {
  const [notes, setNotes] = useState([]);
  const [activeNoteId, setActiveNoteId] = useState(null);

  const handleAddNote = () => {
    const newNote = {
      id: Date.now().toString(),
      title: 'Untitled Note',
      content: '',
      isEditing: true,
    };
    setNotes([newNote, ...notes]);
    setActiveNoteId(newNote.id);
  };

  const handleUpdateNote = (id, updatedNote) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === id ? { ...note, ...updatedNote } : note))
    );
  };

  const handleDeleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
    if (activeNoteId === id) {
      setActiveNoteId(null);
    }
  };

  const activeNote = notes.find((note) => note.id === activeNoteId);

  return (
    <Box>
      <Header />
      <Box display="flex">
        <Sidebar
          notes={notes}
          onAddNote={handleAddNote}
          activeNoteId={activeNoteId}
          setActiveNoteId={setActiveNoteId}
        />
        <Notes
          note={activeNote}
          onUpdateNote={handleUpdateNote}
          onDeleteNote={handleDeleteNote}
        />
      </Box>
    </Box>
  );
}

