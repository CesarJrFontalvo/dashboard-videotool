import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box, Button, Checkbox, Tab, Tabs, TextField } from '@mui/material';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import { grey, deepPurple,red } from '@mui/material/colors';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';

// Generate  Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    6,
    '30/may/2023',
    'BExportados Wil',
    '7,3 GB',
    14,
    212.79,
  ),
  createData(
    6,
    '30/may/2023',
    'BExportados Wil',
    '7,3 GB',
    14,
    212.79,
  ),
  createData(
    6,
    '30/may/2023',
    'BExportados Wil',
    '7,3 GB',
    14,
    212.79,
  ),
  createData(
    4,
    '30/may/2023',
    'BExportados Wil',
    '7,3 GB',
    14,
    212.79,
  ),
  createData(
    6,
    '30/may/2023',
    'BExportados Wil',
    '7,3 GB',
    14,
    212.79,
  ),
];

export const PaperBin = ({value, setValue}) => {

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const primary = deepPurple['A700'];
    return (
      <div >
        <div style={{ display: 'flex', height: 50 }}>
          <Box sx={{ width: '100%', mb: 4, }}>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor='inherit'
              indicatorColor="secondary"
            // aria-label="secondary tabs example"
            >
              <Tab className="custom-tab" sx={value === 'one' && { color: '#4321F5' }} value="one" iconPosition="start" icon={<LibraryBooksOutlinedIcon style={{ marginRight: '5px', }} />} label="Biblioteca" />
  
              <Tab className="custom-tab" value="two" sx={value !== 'one' && { color: '#4321F5' }} label="Papelera" iconPosition="start" icon={<DeleteOutlinedIcon style={{ marginRight: '5px', }} />} />
            </Tabs>
          </Box>
        </div>
  
        <Paper
          component="form"
          sx={{ display: 'flex', alignItems: 'center', width: 400, mb: '5vh', mt: 5 }}
        >
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Buscar video"
          />
        </Paper>
  
        <Table sx={{ minWidth: 350, cursor: 'pointer' }} size="small"  >
          <TableHead hover={true} >
            <TableRow >
              <TableCell sx={{ fontWeight: 'bold' }} ><Checkbox size="small" sx={{
                color: grey[400], '&.Mui-checked': { color: '#4321F5' },
              }} />Nombre</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }} align="center">Videos</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }} align="center" >Tamaño</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }} align="center">Última Modificaciíon</TableCell>
              {/* <TableCell align="right">Sale Amount</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow hover={true} key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
  
                <TableCell >
                  <Checkbox size="small" style={{ marginBottom: '-2' }} sx={{
                    color: grey[400], '&.Mui-checked': { color: '#4321F5' },
                  }} />
                  <FolderOutlinedIcon style={{ color: red[200], marginBottom: '-5' }} />
                  &nbsp;&nbsp; {row.name}
                </TableCell>
                <TableCell align="center">{row.paymentMethod}</TableCell>
                <TableCell align="center">{row.shipTo}</TableCell>
                <TableCell align="center">{row.date}</TableCell>
                {/* <TableCell align="right">{`$${row.amount}`}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
  
      </div>
    );
}
