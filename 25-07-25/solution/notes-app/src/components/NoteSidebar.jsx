
import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';

const NoteSidebar = ({
  isOpen,
  onClose,
  notes,
  onEditNote,
  onDeleteNote,
  currentNoteId,
}) => {
  return (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={onClose}           // click outisde or escape key to close the drawer
      variant="temporary"
      ModalProps={{
        keepMounted: true,        // content not unmounted its hidden
      }}
      sx={{
        width: 280,
        flexShrink: 0,
        // target the specific visual part
        '& .MuiDrawer-paper': {
          width: 280,
          boxSizing: 'border-box',
          backgroundColor: '#333',
          color: 'white',
        },
      }}
    >
      <Toolbar /> 
      <Box sx={{ overflow: 'auto', p: 1 }}>
        <Typography variant="h6" sx={{ p: 2, color: '#bdbdbd' }}>
          Saved Notes
        </Typography>
        <Divider sx={{ borderColor: '#555' }} />
        <List>
          {notes.length === 0 ? (
            <Typography variant="body2" sx={{ p: 2, color: '#999' }}>
              No notes saved yet.
            </Typography>
          ) : (
            notes.map((note) => (
              <ListItem
                key={note.id}
                sx={{
                  backgroundColor: currentNoteId === note.id ? '#444' : 'transparent',
                  '&:hover': {
                    backgroundColor: '#444',
                  },
                  borderRadius: '8px',
                  mb: 0.5,
                  alignItems: 'flex-start',
                }}
              >
                <ListItemText
                  primary={
                    <Typography
                      variant="body1"
                      sx={{
                        color: currentNoteId === note.id ? '#81d4fa' : 'white',
                        fontWeight: currentNoteId === note.id ? 'bold' : 'normal',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {note.title || 'Untitled Note'}
                    </Typography>
                  }
                  secondary={
                    <>
                      <Typography
                        component="span"
                        variant="body2"
                        sx={{
                          display: 'block',
                          color: '#b0b0b0',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          mt: 0.5,
                        }}
                      >
                        {note.content.substring(0, 20)}
                        {note.content.length > 20 ? '...' : ''}
                      </Typography>
                      <Typography component="span" variant="caption" sx={{ display: 'block', color: '#888' }}>
                        {note.lastModified}
                      </Typography>
                    </>
                  }
                  onClick={() => onEditNote(note.id)}
                  sx={{ cursor: 'pointer', flexGrow: 1 }}
                />
                <Box sx={{ display: 'flex', alignItems: 'center', ml: 1 }}>
                  <Tooltip title="Edit">
                    <IconButton
                      edge="end"
                      aria-label="edit"
                      onClick={() => onEditNote(note.id)}
                      sx={{ color: '#81d4fa' }}
                      size="small"
                    >
                      <EditIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={(e) => {
                        e.stopPropagation();           // Prevent ListItem click
                        onDeleteNote(note.id);
                      }}
                      sx={{ color: '#ef5350' }}
                      size="small"
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </Box>
              </ListItem>
            ))
          )}
        </List>
      </Box>
    </Drawer>
  );
};

export default NoteSidebar;