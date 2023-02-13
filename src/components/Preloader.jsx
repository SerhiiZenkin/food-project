import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CircularProgress from '@mui/material/CircularProgress';

export default function CircularProgressSizes() {
  return (
    <Box sx={{ display: 'flex', gap: 2, justifyContent: "center", alignItems: 'center', flexWrap: 'wrap', fontFamily: "montserrat" }}>
      <IconButton>
        <CircularProgress thickness={2} />
      </IconButton>
      <Button>
        Loading…
      </Button>
    </Box>
  );
}

