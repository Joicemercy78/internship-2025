// Sidebar.jsx
import React from 'react';
import { Box, Button, List, ListItemButton, Typography } from '@mui/material';

export default function Sidebar({ notes, onAddNote, activeNoteId, setActiveNoteId }) {
  return (
    <Box
      sx={{
        width: 300,
        backgroundColor: '#f3f3f3',
        height: '100vh',
        overflowY: 'auto',
        borderRight: '1px solid #ccc',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <List sx={{ flexGrow: 1 }}>
        {notes.map((note) => (
          <ListItemButton
            key={note.id}
            selected={note.id === activeNoteId}
            onClick={() => setActiveNoteId(note.id)}
            sx={{
              py: 1.5,
              px: 2,
              borderBottom: '1px solid #ddd',
              alignItems: 'flex-start',
              textAlign: 'left',
            }}
          >
            <Box>
              <Typography variant="subtitle1" fontWeight="bold">
                {note.title || 'Untitled Note'}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  maxWidth: '230px',
                }}
              >
                {note.content || 'No content'}
              </Typography>
            </Box>
          </ListItemButton>
        ))}
        <Box sx={{ p: 2, pt: 0 }}>
          <Button variant="contained" fullWidth onClick={onAddNote}>
            + New Note
          </Button>
        </Box>
      </List>
    </Box>
  );
}