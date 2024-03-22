import React, { useState } from 'react'
import MuiDrawer from '@mui/material/Drawer';
import { styled, } from '@mui/material/styles';
import { Button, Card, Grid, IconButton, List, Slider, Toolbar, Tooltip, Typography } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { useNavigate } from 'react-router-dom';
import { mainListItems } from './listItems';

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: 200,
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




export const Sidebar = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(true);

    const toggleDrawer = () => {
        setOpen(!open);
    };

    const redirect = () => {
        navigate('/')
    };

    return (
        <Drawer variant="permanent" open={open}  >
            <Toolbar
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    px: [1], mb: -2,
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
                <div onClick={redirect} >
                    {mainListItems}
                </div>
                
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
    )
}
