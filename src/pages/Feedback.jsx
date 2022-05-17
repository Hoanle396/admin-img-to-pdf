import React ,{useState,useEffect}from 'react'
import {Table ,Card} from '@nextui-org/react'
import axios from 'axios'
export default function Feedback() {
   const [rows,setRow]=useState([])
   const columns = [
      {
        key: "name",
        label: "NAME",
      },
      {
        key: "phone",
        label: "PHONE NUMBER",
      },
      {
        key: "message",
        label: "MESSAGE",
      },
    ];
    useEffect(()=>{
       axios.get('http://serve-android.herokuapp.com/admin/feedback')
       .then(res=>{
          setRow(res.data)
       })
       .catch(()=>{
          alert("Error load data")
       })
    })
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
            {(columnKey) => <Table.Cell>{item[columnKey]}</Table.Cell>}
          </Table.Row>
        )}
      </Table.Body>
    </Table>
    </Card>
    </div>
  )
}
