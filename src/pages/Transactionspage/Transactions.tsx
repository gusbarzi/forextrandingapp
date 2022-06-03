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
  { id: 2, firstName: 'Tainá', lastName: 'Oliveira', amount: 42.4554545 },
  { id: 3, firstName: 'Marcio', lastName: 'Gonçalves', amount: 45.65465465 },
];

export const Transactions = () => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

export default Transactions;