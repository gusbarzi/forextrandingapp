import { Box } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'amount',
    headerName: 'amount (£)',
    type: 'number',
    width: 90,
  },
  {
    field: 'Data',
    headerName: 'Transaction Date',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 460,
    valueGetter: () =>
      `${Date()}`,
  },
];

const rows = [
  { id: 1, firstName: 'Gustavo', lastName: 'Barzi', amount: 15.6651651 },
  { id: 2, firstName: 'Gustavo', lastName: 'Barzi', amount: 42.4554545 },
  { id: 3, firstName: 'Gustavo', lastName: 'Barzi', amount: 45.65465465 },
  { id: 4, firstName: 'Gustavo', lastName: 'Barzi', amount: 455.65465465 },
  { id: 5, firstName: 'Gustavo', lastName: 'Barzi', amount: 454.65465465 },
  { id: 6, firstName: 'Gustavo', lastName: 'Barzi', amount: 455.65465465 },
  { id: 7, firstName: 'Gustavo', lastName: 'Barzi', amount: 456.65465465 },
  { id: 8, firstName: 'Gustavo', lastName: 'Barzi', amount: 452.65465465 },
];

export const Transactions = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: 890,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: 950,
          height: 600,
          backgroundColor: '#e9e9e9',
          p: 2,
          m: 1,
          borderRadius: 5,
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </Box>
    </Box>
  );
}

export default Transactions;