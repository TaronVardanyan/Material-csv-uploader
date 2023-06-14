import {UploaderWrapper} from "./styles";
import Papa from 'papaparse';

const Uploader = ({setRows}) => {
   
   const handleFileUpload = (event) => {
      const file = event.target.files[0];
      Papa.parse(file, {
         header: true,
         dynamicTyping: true,
         complete: (results) => {
            setRows(ps => ([...ps, ...results.data]))
            },
      });
   };
   
   return <UploaderWrapper>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
   </UploaderWrapper>
}

export default Uploader;