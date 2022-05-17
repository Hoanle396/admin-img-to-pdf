import React from 'react';
import{Grid,Card, } from '@nextui-org/react'
import Navbar from './components/Navbar';
function App() {
  return (
    <div>
     <Grid.Container gap={2}  justify="center">
      <Grid xs={4}>
      <Card css={{ mw: "400px" , marginTop:"100px" }}>
         Admin Dashboard
      </Card>
      </Grid>
   
    </Grid.Container>
    </div>
  );
}

export default App;
