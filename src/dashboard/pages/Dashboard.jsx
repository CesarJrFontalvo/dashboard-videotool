import * as React from 'react';
import {  ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Button, Card, Slider, Tooltip } from '@mui/material';
import { themeMontserrat } from '../../theme/montserratTheme';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';


export default function Dashboard() {

  return (

    <ThemeProvider theme={themeMontserrat}>
      <Box sx={{ display: 'flex' }}>
        <Box sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          pt: 2, pl: 2, pb: 2
        }}>
          <Sidebar />
        </Box>

        <Box
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
          }}
        >
          <Grid sx={{ m: 2 }}>
            <Grid item xs={12}>
              <Paper sx={{ p: 2, mb: 5 }}>
                <Outlet />
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>

    </ThemeProvider>
  );
}