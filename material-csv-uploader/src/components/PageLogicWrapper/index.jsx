import {useState} from "react";
import {LogicWrapper} from "./styles";
import Uploader from "./components/Uploader";
import GridTable from "./components/GridTable";

const PageLogicWrapper = () => {
   const [rows, setRows] = useState([]);
   
   return <LogicWrapper>
      <Uploader setRows={setRows}/>
      <GridTable rows={rows}/>
   </LogicWrapper>
}

export default PageLogicWrapper;