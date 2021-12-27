import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }, {boxShadow:'0 3px 12px 0 rgb(0 0 0 / 20%)'}}>
      <AppBar position="static">
        <Toolbar dense='true' disableGutters>

          <Button color="inherit">Dashboard</Button>
          <Button color="inherit">Orders</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}