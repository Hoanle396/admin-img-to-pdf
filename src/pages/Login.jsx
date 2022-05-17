import React ,{useState} from 'react'
import{Grid,Card, Input, Spacer,Button,Text} from '@nextui-org/react'
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Login() {
   const [username,setUsername]=useState()
   const [password,setPassword]=useState()
   const [error,setError]=useState("")
   const navigate=useNavigate()
   const handleSubmit=()=>{
      console.log(username)
      setError("")
      axios.post('https://serve-android.herokuapp.com/admin/login',{username:username,password:password},{headers:{'Access-Control-Allow-Origin':'*','Content-Type':'application/json'}})
      .then((res)=>{
         localStorage.setItem('token',res.data.token)
         navigate("/")
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
       <Spacer y={2}/>
      <Input clearable bordered labelPlaceholder="User name" value={username} onChange={(e)=>{setUsername(e.target.value)}} />
      <Spacer y={2.5} />
      <Input.Password clearable bordered labelPlaceholder="Pass word" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
      <Spacer y={2.5} />
      <Button color="gradient" auto onClick={handleSubmit}>
          Login
        </Button>
    </Card>
      </Grid>
   
    </Grid.Container>
  )
}
