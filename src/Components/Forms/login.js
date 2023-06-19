import React,{useState} from 'react'

const Login = () => {

const [data,setData] = useState({
  username:'',
  password: ''
})
const {username,password} = data;

const changeHandler =e =>{
  setData({...data,[e.target.name]:[e.target.value]});
}

const submitHandler = e=>{
    e.preventDefault();
    console.log(data)
}


  return (
    <div>
        <form onSubmit={submitHandler}>
        <input type='text' name='username' placeholder='Username' value={username} onChange={changeHandler}/>
        <input type='password' name='password' placeholder='Password' value={password} onChange={changeHandler}/>
        <input type='submit' name='Submit'/>

        </form>
    </div>
  )
}

export default Login