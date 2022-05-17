import React ,{useState} from 'react'
import{Grid,Card, Input, Spacer,Button,Text} from '@nextui-org/react'
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Send() {
   const [title,setTitle]=useState()
   const [body,setBody]=useState()
   const [error,setError]=useState("")
   const [res,setRes]=useState("")
   const handleSubmit=()=>{
      console.log(username)
      setError("")
      setRes("")
      axios.post('https://serve-android.herokuapp.com/feedback/send',{title:title,body:body},{headers:{'Access-Control-Allow-Origin':'*','Content-Type':'application/json'}})
      .then((res)=>{
        setRes("Thông báo đã được gửi đi")
      })
      .catch((err)=>{
         setError(err.message)
      })
   }
  return (
   <Grid.Container gap={2}  justify="center">
      <Grid xs={4}>
        
      <Card css={{ mw: "400px" , marginTop:"100px" }}>
      <Text gap={4} justify="center" color="primary">Login</Text>
       <Spacer y={2}/>
       <Text color="red">{error}</Text>
       <Text color="success">{res}</Text>
       <Spacer y={2}/>
      <Input clearable bordered labelPlaceholder="Title" value={title} onChange={(e)=>{setTitle(e.target.value)}} />
      <Spacer y={2.5} />
      <Input clearable bordered labelPlaceholder="Body" value={body} onChange={(e)=>{setBody(e.target.value)}} />
      <Spacer y={2.5} />
      <Button color="gradient" auto onClick={handleSubmit}>
          Send Notification
        </Button>
    </Card>
      </Grid>
   
    </Grid.Container>
  )
}
