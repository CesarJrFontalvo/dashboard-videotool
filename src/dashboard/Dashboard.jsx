import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems, secondaryListItems } from './listItems';
// import Chart from './Chart';
// import Deposits from './Deposits';
import Orders from './Orders';
import { Button, Card, Slider, Tooltip } from '@mui/material';
// import { Card } from '@mui/material';



const drawerWidth = 200;


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      borderRadius: 5,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(8),
        },
      }),
    },

  }),
);

// TODO remove, this demo shouldn't need to reset the theme.
// const defaultTheme = createTheme();
const themeMontserrat = createTheme({
  typography: {
    fontFamily: [
      "Montserrat",
      'sans-serif'
    ].join(','),
  }
})

export default function Dashboard() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (

    // agregar un box que para hacer la card 
    <ThemeProvider theme={themeMontserrat}>
      <Box
        sx={{ display: 'flex' }}
      >
        <Box sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          pt: 2, pl: 2, pb: 2
        }}>
          <Drawer variant="permanent" open={open}  >
            <Toolbar
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                px: [1],
              }}
            >
              <IconButton onClick={toggleDrawer}>
                {open ? <Tooltip placement="right" title='Close'><ChevronLeftIcon /></Tooltip> : <Tooltip placement="right" title='Open'>  <KeyboardArrowRightOutlinedIcon /></Tooltip>} <br />
              </IconButton>
            </Toolbar>

            <Toolbar sx={{ display: 'flex', justifyContent: 'center', }}>
              <img src="https://res.cloudinary.com/difxvqjj3/image/upload/v1711049735/Proyecto2/fqr5geeyailvwm8ydgyn.png" alt="logo" style={{ height: '60px', width: '60px' }} />
            </Toolbar>

            <List component="nav" >
              {mainListItems}
              {open &&
                <Card sx={{
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                      ? theme.palette.grey[100]
                      : theme.palette.grey[900],
                  m: 2, p: 1
                }}>
                  <Grid>
                    <Typography fontWeight={'bold'} fontSize={12} >Mi Plan-Plus</Typography>
                    <Typography fontSize={9} >El uso se renueva el: 3-may-23</Typography>

                    <Typography fontSize={10} sx={{ mt: 2 }}>
                      Almacenamiento
                    </Typography>

                    <Slider
                      sx={{ color: '#4321F5', mt: -1 }}
                      size="small"
                      valueLabelDisplay="auto"
                      aria-label="custom thumb label"
                      defaultValue={75}
                    />
                  </Grid>

                  <Grid>
                    <Typography fontSize={10}  >
                      Banda Mensual
                    </Typography>
                    <Slider sx={{ color: '#4321F5', mt: -1 }} size="small" defaultValue={55} aria-label="Default" valueLabelDisplay="auto" />
                  </Grid>

                  <Button sx={{ mb: 2, background: '#4321F5', borderRadius: 10, height: 20, width: 100, fontSize: 8 }} variant='contained' size="small">Administrar plan</Button>
                </Card>
              }
            </List>
          </Drawer>
        </Box>

        <Box
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            // width: 900,
            // overflow: 'auto',

          }}
        >
          <Grid sx={{ m: 2 }}>
            <Grid item xs={12}>
              <Paper sx={{ p: 2, mb: 5 }}>
                <Orders />
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>

    </ThemeProvider>
  );
}