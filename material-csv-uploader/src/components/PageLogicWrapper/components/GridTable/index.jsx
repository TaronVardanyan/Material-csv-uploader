import {TableWrapper} from "./styles";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import CustomToolbar from "./components/CustomToolbar";

const columns = [
   { field: 'id', headerName: 'ID', width: 70 },
   { field: 'Name', headerName: 'Name', width: 130 },
   { field: 'Age', headerName: 'Age', width: 90 }
   ];

const GridTable = ({rows}) => {
   return <TableWrapper>
      <Box sx={{ height: 400, width: '100%' }}>
         <DataGrid
            rows={rows}
            columns={columns}
            getRowId={(row) => row.id}
            slots={{ toolbar: rows.length ? CustomToolbar : null }}
         />
         </Box>
   </TableWrapper>
}

export default GridTable;