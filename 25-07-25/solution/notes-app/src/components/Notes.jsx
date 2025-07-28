// Notes.jsx
import React from 'react';
import { Box, IconButton, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';
import notesbg from '../assets/notesbg.png';

export default function Notes({ note, onUpdateNote, onDeleteNote }) {
  if (!note) {
    return <Box p={4}>create a note to get started.</Box>;
  }

  const handleChange = (field) => (e) => {
    onUpdateNote(note.id, { [field]: e.target.value });
  };

  const handleEdit = () => {
    onUpdateNote(note.id, { isEditing: true });
  };

  const handleDone = () => {
    onUpdateNote(note.id, { isEditing: false });
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        p: 4,
        backgroundImage: `url(${notesbg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        overflowY: 'auto',
      }}
    >
      {/* Top buttons */}
      <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
        <IconButton onClick={handleEdit}><EditIcon /></IconButton>
        <IconButton onClick={handleDone}><DoneIcon /></IconButton>
        <IconButton onClick={() => onDeleteNote(note.id)}><DeleteIcon /></IconButton>
      </Box>

      {/* Title input */}
      <TextField
        fullWidth
        placeholder="Note Title"
        value={note.title}
        onChange={handleChange('title')}
        disabled={!note.isEditing}
        sx={{
          mb: 2,
          backgroundColor: 'rgba(255,255,255,0.8)',
          borderRadius: 2,
        }}
      />

      {/* Content area */}
      <TextField
        fullWidth
        multiline
        rows={20}
        placeholder="Write your note here..."
        value={note.content}
        onChange={handleChange('content')}
        disabled={!note.isEditing}
        sx={{
          backgroundColor: 'rgba(255,255,255,0.8)',
          borderRadius: 2,
        }}
      />
    </Box>
  );
}
