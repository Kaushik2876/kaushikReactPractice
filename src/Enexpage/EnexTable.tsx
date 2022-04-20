
import { forwardRef, useState } from 'react';
import MaterialTable, {Icons}  from "material-table";
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons:Icons = {
    Add: forwardRef((props:any, ref:any) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props:any, ref:any) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props:any, ref:any) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props:any, ref:any) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props:any, ref:any) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props:any, ref:any) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props:any, ref:any) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props:any, ref:any) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props:any, ref:any) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props:any, ref:any) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props:any, ref:any) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props:any, ref:any) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props:any, ref:any) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props:any, ref:any) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props:any, ref:any) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props:any, ref:any) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props:any, ref:any) => <ViewColumn {...props} ref={ref} />)
  };
const EnexTable = ()=> {

  const [selectedRows, setSelectedRows] = useState<any>([]);

    console.log(selectedRows);
    return(
        <>
       <div style={{ maxWidth: "100%" }}>
        <MaterialTable

onSelectionChange={(rows) => {
  setSelectedRows(rows);
}}
        options={{
          search:false,           // Table ma search nu option remove thase
          selection: true,        // Table ma check box lavva mate
          paging: false,           // page numbers & side page nikdi jase
        }}

        icons={tableIcons}
          columns={[
            { title: "Name", field: "name" },
            { title: "First Name", field: "surname" },
            { title: "BirthYear", field: "birthYear", type: "numeric" },
            {
              title: "Doğum Yeri",
              field: "birthCity",
              lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
            },
          ]}
          data={[
            {
              name: "Mehmet",
              surname: "Baran",
              birthYear: 1987,
              birthCity: 63,
            },
            {
              name: "xxx",
              surname: "dddd",
              birthYear: 1987,
              birthCity: 63,
            },
          ]}
          title="Demo Title"
        />
      </div>
        </>
    )
}

export default EnexTable;