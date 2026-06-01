import React, { useState } from "react";
import axios from "axios";

function App() {

const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [token,setToken]=useState("");

const register=async()=>{

try{

const res=await axios.post(

"http://localhost:5000/api/auth/register",

{
name,
email,
password
}

);

alert(res.data.message);

}catch(error){

alert(

error.response?.data?.message
|| "Something went wrong"

);

}

};

const login=async()=>{

try{

const res=await axios.post(

"http://localhost:5000/api/auth/login",

{
email,
password
}

);

setToken(res.data.token);

alert(res.data.message);

}catch(error){

alert(

error.response?.data?.message
|| "Something went wrong"

);

}

};

return(

<div style={{

minHeight:"100vh",
display:"flex",
justifyContent:"center",
alignItems:"center",
background:
"linear-gradient(135deg,#141E30,#243B55)"

}}>

<div style={{

width:"420px",
padding:"35px",
borderRadius:"20px",
background:"rgba(255,255,255,0.08)",
backdropFilter:"blur(10px)",
boxShadow:"0 8px 32px rgba(0,0,0,0.3)",
color:"white",
textAlign:"center"

}}>

<h1>🚀 Backend Assignment</h1>

<p>Register & Login Dashboard</p>

<input
placeholder="Name"
value={name}
onChange={(e)=>setName(e.target.value)}
style={inputStyle}
/>

<input
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
style={inputStyle}
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
style={inputStyle}
/>

<div>

<button
onClick={register}
style={registerBtn}
>
Register
</button>

<button
onClick={login}
style={loginBtn}
>
Login
</button>

</div>

{token && (

<div style={{

marginTop:"20px",
padding:"15px",
background:"#1E293B",
borderRadius:"12px",
wordWrap:"break-word"

}}>

<h3>JWT Token 🔑</h3>

<p style={{
fontSize:"12px"
}}>
{token}
</p>

</div>

)}

</div>

</div>

);

}

const inputStyle={

width:"90%",
padding:"14px",
margin:"10px 0",
borderRadius:"12px",
border:"none",
outline:"none",
fontSize:"16px"

};

const registerBtn={

padding:"12px 25px",
border:"none",
borderRadius:"12px",
background:"#7C3AED",
color:"white",
cursor:"pointer",
marginRight:"10px"

};

const loginBtn={

padding:"12px 25px",
border:"none",
borderRadius:"12px",
background:"#10B981",
color:"white",
cursor:"pointer"

};

export default App;