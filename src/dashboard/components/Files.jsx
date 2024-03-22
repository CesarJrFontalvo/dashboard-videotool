import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box, Button, Checkbox, Tab, Tabs, TextField, Typography } from '@mui/material';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import { grey, deepPurple } from '@mui/material/colors';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

import { useNavigate, useParams } from 'react-router-dom';

// Generate  Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
    return { id, date, name,  paymentMethod, shipTo, amount };
}

const rows = [
    createData(
        0,
        '30/may/2023',
        'Afiliado Master',
        '7,5 GB',
        '4:33:55',
        312.44,
    ),
    createData(
        1,
        '30/may/2023',
        'BeMaster',
        '7,5 GB',
        '47:55',
        866.99,
    ),
    createData(
        2,
        '30/may/2023',
        'Comizzión',
        '1,5 GB',
        '10:12',
        100.81
    ),
    createData(
        3,
        '30/may/2023',
        'Creador de contenido',
        '9,5 GB',
        '03:50:22',
        654.39,
    ),
    createData(
        4,
        '30/may/2023',
        'BExportados Wil',
        '7,3 GB',
        '5:00',
        212.79,
    ),
    createData(
        6,
        '30/may/2023',
        'BExportados Wil',
        '7,3 GB',
        '04:11:37',
        212.79,
    ),
];

export const Files = () => {
    const navigate = useNavigate();
    const { name } = useParams()
 
    const onNavigateBack = () => {
      navigate(-1)
    }
    const primary = deepPurple['A700'];
    return (
        <>
            <div style={{ display: 'flex', height: 50 }}>
                <Box sx={{ mb: 4, }} onClick={onNavigateBack} >
                    <ArrowBackOutlinedIcon sx={{ background: '#4321F5', color: 'white', borderRadius: 1, fontSize: 30, mt: 2 }} />
                </Box>
                <Typography variant='h6' component="h2" sx={{ mt: 2, ml: 1 }}>
                    Home /{<span style={{ fontWeight:'bold' }}> {name}</span>}
                </Typography>
            </div>

            <Table sx={{ minWidth: 350, cursor: 'pointer',mt:4 }} size="small"  >
                <TableHead hover={true} >
                    <TableRow >
                        <TableCell sx={{ fontWeight: 'bold' }} ><Checkbox size="small" sx={{
                            color: grey[400], '&.Mui-checked': { color: '#4321F5' },
                        }} />Nombre</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }} align="center" >Tamaño</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }} align="center">Duración</TableCell>
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
                                <PlayCircleOutlinedIcon style={{ color: '#4321F5', marginBottom: '-5' }} />
                                &nbsp;&nbsp; {row.name}
                            </TableCell>
                            <TableCell align="center">{row.shipTo}</TableCell>
                            <TableCell align="center">{row.paymentMethod}</TableCell>
                            <TableCell align="center">{row.date}</TableCell>
                            {/* <TableCell align="right">{`$${row.amount}`}</TableCell> */}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

        </>
    );
}
