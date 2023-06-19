import React,{useState} from 'react'
import { Navigate } from 'react-router-dom';


const Home = () => {

const [auth,setData]=useState(false);

if (auth){
  return < Navigate to ='./login'/>
}
  return (
    <div>
<h2>This is Home page</h2>

<button onClick={()=>setData(true)}>Login</button>
    </div>
    
  )
}

export default Home