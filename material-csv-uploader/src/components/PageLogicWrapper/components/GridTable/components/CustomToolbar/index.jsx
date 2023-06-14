import {
   GridToolbarContainer,
   GridToolbarExportContainer,
   GridCsvExportMenuItem,
} from '@mui/x-data-grid';
const CustomToolbar = (props) => {
   const csvOptions = { delimiter: ';' };
   
   return (
      <GridToolbarContainer {...props}>
         <GridToolbarExportContainer {...props}>
            <GridCsvExportMenuItem options={csvOptions} />
         </GridToolbarExportContainer>
      </GridToolbarContainer>
      );
}

export default CustomToolbar;