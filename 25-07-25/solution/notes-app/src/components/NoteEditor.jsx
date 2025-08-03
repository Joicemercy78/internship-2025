
import React, { useState, useEffect } from 'react';
// import TextField from '@mui/material/TextField';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import {Typography, Box, TextField} from '@mui/material';

const NoteEditor = ({ note, onSave, onClear }) => {
  const [currentTitle, setCurrentTitle] = useState(note?.title || '');
  const [currentContent, setCurrentContent] = useState(note?.content || '');

// update current title, content & display the correct content from list
  useEffect(() => {                  
    setCurrentTitle(note?.title || '');
    setCurrentContent(note?.content || '');
  }, [note]);     //dependency array - re-run effect

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'title') {
      setCurrentTitle(value);
    } else {
      setCurrentContent(value);
    }
  };

  const handleBlur = () => {
    const idToUse = note?.id || crypto.randomUUID();

    if (currentTitle.trim() !== '' || currentContent.trim() !== '') {
      const now = new Date();
      const formattedDateTime = now.toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });

      const savedNote = {
        id: idToUse,
        title: currentTitle.trim() || 'Untitled Note',
        content: currentContent.trim(),
        createdAt: note?.createdAt || formattedDateTime,
        lastModified: formattedDateTime,
      };
      onSave(savedNote);
      onClear();
    } else if (note?.id) {
        //  existing note, fields are empty,
        onSave(null);                          //delete the note with ID
        onClear();
    } else {
        onClear();
    }
  };

  return (
    <Box sx={{ p: 3, flexGrow: 1, backgroundColor: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <TextField
        name="title"
        label="Note Title"
        variant="outlined"             // Changed to outlined for a clear border
        fullWidth
        value={currentTitle}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Enter your note title..."
        />
      <TextField
        name="content"
        variant="outlined"
        fullWidth
        multiline
        rows={15}
        value={currentContent}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Start writing your note here..."
    
      />
      {note?.lastModified && (
        <Typography variant="caption" sx={{ mt: 2, color: '#888' }}>
          Last Modified: {note.lastModified}
        </Typography>
      )}
    </Box>
  );
};

export default NoteEditor;