import React ,{useState,useEffect}from 'react'
import {Table ,Card,User,Loading} from '@nextui-org/react'
import axios from 'axios'
export default function Feedback() {
   const [rows,setRow]=useState([])
    const [isload,setIsLoaded]=useState(true)
   const columns = [
      {
        key: "fullName",
        label: "Full Name",
      },
      {
        key: "email",
        label: "Email",
      },
      {
        key: "photoUrl",
        label: "Photo",
      },
       {
         key: "key",
         label: "API key",
       },
    ];
    useEffect(()=>{
       setIsLoaded(true)
       axios.get('http://serve-android.herokuapp.com/admin/user')
       .then(res=>{
          setRow(res.data)
       })
       .catch(()=>{
          alert("Error load data")
       })
       .finally(()=>{setIsLoaded(false)})
    },[])
    const renderCell = (user, columnKey) => {
      const cellValue = user[columnKey];
      switch (columnKey) {
        case "photoUrl":
          return (
            <User squared src={user.photoUrl} css={{ p: 0 }}></User>
          );
      
        default:
          return cellValue;
      }
    };
  return (

    <div>
       <Card css={{marginTop:"100px"}}>
       <Table
       aria-label="Example table with static content"
       css={{
        height: "auto",
        minWidth: "100%",
        }}
       >
     <Table.Header columns={columns}>
        {(column) => (
          <Table.Column key={column.key}>{column.label}</Table.Column>
        )}
      </Table.Header>
      <Table.Body items={rows}>
        {(item) => (
          <Table.Row key={item.index}>
            {(columnKey) => <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>}
          </Table.Row>
        )}
      </Table.Body>
    </Table>
    </Card>
    </div>
  )
}
