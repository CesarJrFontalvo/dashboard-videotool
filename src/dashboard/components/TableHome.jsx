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
import { grey, deepPurple } from '@mui/material/colors';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import { Link, useNavigate } from 'react-router-dom';

// Generate  Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '30/may/2023',
    'Afiliado Master',
    '7,5 GB',
    8,
    312.44,
  ),
  createData(
    1,
    '30/may/2023',
    'BeMaster',
    '7,5 GB',
    21,
    866.99,
  ),
  createData(
    2,
    '30/may/2023',
    'Comizzión',
    '1,5 GB',
    10,
    100.81
  ),
  createData(
    3,
    '30/may/2023',
    'Creador de contenido',
    '9,5 GB',
    2,
    654.39,
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

export const TableHome = () => {
  const navigate = useNavigate();

  const redirect = () => {
    navigate('/paper-bin')
  };

  const [value, setValue] = React.useState('one');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const primary = deepPurple['A700'];
  return (
    <>
      <div style={{ display: 'flex', height: 50 }}>
        <Box sx={{ width: '100%', mb: 4, }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor='inherit'
            indicatorColor="secondary"
          >
            <Tab className="custom-tab" sx={{ color: '#4321F5', fontSize: 12 }} value="one" iconPosition="start" icon={<LibraryBooksOutlinedIcon style={{ marginRight: '5px', }} />} label="Biblioteca" />
            <Tab onClick={redirect} sx={{ fontWeight: 'bold', fontSize: 12 }} className="custom-tab" value="two" label="Papelera" iconPosition="start" icon={<DeleteOutlinedIcon style={{ marginRight: '5px', }} />} />
          </Tabs>
        </Box>

        <Button size="small" variant="outlined" style={{ marginRight: '10px', height: 35, fontSize: 8, width: 160, color: 'black', background: '#F4F4F4', border: '#F4F4F4' }}><FolderOutlinedIcon style={{ marginRight: '5px' }} />Nueva carpeta</Button>
        <Button size="small" variant="contained" style={{ marginRight: '10px', height: 35, fontSize: 8, width: 160, background: '#4321F5' }}><PlayCircleOutlinedIcon style={{ marginRight: '5px', }} />Nuevo video</Button>
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
        <TableHead  >
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
                <Link style={{ textDecoration: 'none', color: 'black' }} to={`/file/${row.name}`}>
                  <FolderOutlinedIcon style={{ color: '#4321F5', marginBottom: '-5' }} />
                  &nbsp;&nbsp; {row.name}
                </Link>
              </TableCell>

              <TableCell align="center">
                <Link style={{ textDecoration: 'none', color: 'black' }} to={`/file/${row.name}`}>
                  {row.paymentMethod}
                </Link>
              </TableCell>
              <TableCell align="center">
                <Link style={{ textDecoration: 'none', color: 'black' }} to={`/file/${row.name}`}>
                  {row.shipTo}
                </Link>
              </TableCell>
              <TableCell align="center">
                <Link style={{ textDecoration: 'none', color: 'black' }} to={`/file/${row.name}`}>
                  {row.date}
                </Link>
              </TableCell>
              {/* <TableCell align="right">{`$${row.amount}`}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>

    </>
  );
}
