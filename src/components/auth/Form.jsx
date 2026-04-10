import React, { useEffect, useState } from 'react'
import FormHandle from './FormHandle';

const Form = () => {
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [phoneNumber, setPhoneNumber] = useState('');
  const [user, setUser] = useState({
    firstname: "",
      lastname: "",
      email: "",
      password: "",
      phonenumber: ""
  });
  // const [user, setUser] = useState([])
  // useEffect(() =>{
  //  handleInputFormSubmit ()
  // },[])

   const handleInputChange = (e) => {
  const {name, value} = e.target;

  setUser((prev) => ({ ...prev, [name]: value }));

  // switch(name){

  //  case"firstname":
  //  setFirstName(value);
  //  break;

  //  case"lastname":
  //  setLastName(value);
  //  break;

  //  case"email":
  //  setEmail(value);
  //  break;

  //  case"password":
  //  setPassword(value);
  //  break;

  //  case"phonenumber":
  //  setPhoneNumber(value);
  //  break;

  // };
};

 const handleInputFormSubmit =async (event) =>{
  event.preventDefault();

  const url = "http://localhost:3000/User";
   let response = await fetch(url,{
      method:"post",
       headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(user)
    });
     response = await response.json()
     if(response){
      alert("New user added");
     };
     setUser({
    firstname:"",
    lastname:"",
    email:"",
    password:"",
    phonenumber:""
  });
     console.log(user)
};
 return(
  <FormHandle
   user={user}
   onSubmit={handleInputFormSubmit}
   onChange={handleInputChange}/>
 )
  
};

export default Form
