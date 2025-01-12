import React from 'react';
import { Helmet } from 'react-helmet-async';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import {
    Stack,
    Button,
    Container,
    Typography,
  } from '@mui/material';

function Students() {
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'firstName',
          headerName: 'First name',
          width: 150,
          editable: true,
        },
        {
          field: 'lastName',
          headerName: 'Last name',
          width: 150,
          editable: true,
        },
        {
          field: 'age',
          headerName: 'Age',
          type: 'number',
          width: 110,
          editable: true,
        },
        {
          field: 'fullName',
          headerName: 'Full name',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
          valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
      ];
      const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
      ];
      
  return (
    <>
    <Helmet><title>Student Datagrid</title></Helmet>
    <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Students
          </Typography>
          <Button variant="contained" >
            New Student
          </Button>
        </Stack>
    </Container>
        <Box sx={{ width: '80%', justifyContent: 'center', alignItems: 'center', marginLeft: '10%' }}>
         <DataGrid
            autoHeight
            rows={rows}
            columns={columns}
            initialState={{ pagination: {paginationModel: { pageSize: 5,},},}}
            pageSizeOptions={[5,10,20]}
            checkboxSelection
            disableRowSelectionOnClick
        />
        </Box>
   
    </>
  );
};

export default Students;