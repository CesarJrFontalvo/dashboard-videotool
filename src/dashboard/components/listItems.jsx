import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { grey, blue, deepPurple } from '@mui/material/colors';
import { Tooltip } from '@mui/material';


export const mainListItems = (

  <React.Fragment >
    <ListItemButton className='hoverIcon' sx={{ "&:hover": { backgroundColor: '#4321F5', color: 'white' }, "&:focus": { backgroundColor: '#4321F5', color: 'white' }, mx: 1, borderRadius: 1 }}>
      <Tooltip placement="right" title='Dashboard'>
        <ListItemIcon >
          <DashboardIcon />
        </ListItemIcon>
      </Tooltip>
      <ListItemText sx={{ ml: -2, }} secondary="Dashboard" />
    </ListItemButton>

    <ListItemButton className='hoverIcon' sx={{ "&:hover": { backgroundColor: '#4321F5', color: 'white' }, "&:focus": { backgroundColor: '#4321F5', color: 'white' }, mx: 1, borderRadius: 1 }}>
    <Tooltip placement="right" title='Videos'>
      <ListItemIcon>
        <FolderOutlinedIcon />
      </ListItemIcon>
      </Tooltip>
      <ListItemText sx={{ ml: -2 ,}} secondary="Videos" />
    </ListItemButton>

    <ListItemButton className='hoverIcon' sx={{ "&:hover": { backgroundColor: '#4321F5', color: 'white' }, "&:focus": { backgroundColor: '#4321F5', color: 'white' }, mx: 1, borderRadius: 1 }}>
    <Tooltip placement="right" title='Player'>
      <ListItemIcon>
        <PlayCircleOutlinedIcon />
      </ListItemIcon>
      </Tooltip>
      <ListItemText sx={{ ml: -2, }} secondary="Player" />
    </ListItemButton>

    <ListItemButton className='hoverIcon' sx={{ "&:hover": { backgroundColor: '#4321F5', color: 'white' }, "&:focus": { backgroundColor: '#4321F5', color: 'white' }, mx: 1, borderRadius: 1 }}>
    <Tooltip placement="right" title='Analytic'>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      </Tooltip>
      <ListItemText sx={{ ml: -2 }} secondary="Analytic" />
    </ListItemButton>

    <ListItemButton className='hoverIcon' sx={{ "&:hover": { backgroundColor: '#4321F5', color: 'white' }, "&:focus": { backgroundColor: '#4321F5', color: 'white' }, mx: 1, borderRadius: 1 }}>
    <Tooltip placement="right" title='Configuraciones'>
      <ListItemIcon>
        <SettingsOutlinedIcon />
      </ListItemIcon>
      </Tooltip>
      <ListItemText sx={{ ml: -2 }} secondary="Configuraciones" />
    </ListItemButton>

    <ListItemButton className='hoverIcon' sx={{ "&:hover": { backgroundColor: '#4321F5', color: 'white' }, "&:focus": { backgroundColor: '#4321F5', color: 'white' }, mx: 1, borderRadius: 1 }}>
    <Tooltip placement="right" title='Ayuda'>
      <ListItemIcon>
        <HelpOutlineOutlinedIcon  />
      </ListItemIcon>
      </Tooltip>
      <ListItemText sx={{ ml: -2 }} secondary="Ayuda" />
    </ListItemButton>
    
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText secondary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText secondary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText secondary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);