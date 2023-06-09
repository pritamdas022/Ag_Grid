import "./App.css";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useState } from "react";
import { useMemo } from "react";
import { useCallback } from "react";
import User from './users.json'


function App() {
  const [rowData, setRowData] = useState(User);
  const [columnDefs, setColumnDefs] = useState([
    { headerName:'Avatar',field: "Avatar",cellRendererFramework: (params) => (
      <img src={params.value} alt={params.data.name}  />), sortable: true, filter: true },
    {headerName:'First Name', field: "first_name", sortable: true, filter: true },
    { headerName:'Last Name',field: "last_name", sortable: true, filter: true },
    { headerName:'Email',field: "email", sortable: true, filter: true },
    { headerName:'Gender',field: "gender", sortable: true, filter: true },
    { headerName:'Color',field: "color", sortable: true, filter: true },
    { headerName:'Status',field: "Status", sortable: true, filter: true },
  ]);
  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
    }),
    []
  );
  const celClickedListener=useCallback(e=>{
    console.log('cellClicked',e);
  },[])

  return (
    <div className="ag-theme-alpine" style={{ height: 500 }}>
      <AgGridReact
      onCellClicked={celClickedListener}
        rowSelection="multiple"
        animateRows={true}
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
      />
    </div>
  );
}

export default App;
