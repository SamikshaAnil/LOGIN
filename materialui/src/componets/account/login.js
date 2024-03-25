import { useState } from 'react';
import{Box,Button,TextField,styled,Typography} from '@mui/material'
const Component=styled(Box)`
width:400px;
margin:auto;
box-shadow:5px 2px 5px 2px rgb(0 0 0/0.6);
`;
 const Image=styled('img')({
    width:100,
    margin:'auto',
    display:'flex',
    padding:'50px 0 0'
 })
 const Wrapper=styled(Box)`
 padding:25px 35px;
 display:flex;
 flex:1;
 flex-direction:column;
 &>div,&>button{
    margin-top:20px
 }
 `
 const LoginButton=styled(Button)`
 text-transform:none;
 background:#a52a2a
 color:#fff;
 height:48px;
 border-radius:2px;
 `
 const  SignupButton=styled(Button)`
 text-transform:none;
 background:#a52a2a
 color:#fff;
 height:48px;
 border-radius:2px;
 `
 const Text=styled(Typography)`
 color:#878786
 font-size:17px
 `
 const signupValues={
    name:'',
    username:'',
    password:''
 }

 const Login=()=>{   
    const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';
    const [account,toggleAccount]=useState('login')
    const[signup,setSignup]=useState(signupValues)
    const toggleSignup=()=>{
        account==='signup'? toggleAccount('login'):toggleAccount('signup')
    }
    const onInputChange=(e)=>{
        setSignup({...signup,[e.target.name]:e.target.value})
    }
     return(
        <Component>
           <Box>
            <Image src={imageURL} alt="login"/>
            {
                account==='login' ?
        <Wrapper>
            <TextField variant='standard' label="Enter username"/>
            <TextField variant='standard' label="Enter password"/>
            <LoginButton variant='contained'>Login</LoginButton>
            <Text style={{textAlign:'center'}}>OR</Text>
            <SignupButton onClick={()=>toggleSignup()}>Create new account</SignupButton>
            </Wrapper>
            :
            <Wrapper>
            <TextField variant='standard'onChange={(e)=>onInputChange(e)} name="name" label="Enter name"/>
            <TextField variant='standard'onChange={(e)=>onInputChange(e)} name="username"  label="Enter username"/>
            <TextField variant='standard'onChange={(e)=>onInputChange(e)} name="password"  label="Enter password"/>

            <SignupButton variant='contained'>Sign up</SignupButton>
            <Text style={{textAlign:'center'}}>OR</Text>
            <LoginButton variant='contained' onClick={()=>toggleSignup()}>Already have an account</LoginButton>
            </Wrapper>
            }
            </Box>
            </Component>
    )
}
export default Login