import React from 'react'

const FormHandle = ({user, onSubmit, onChange}) => {
   
  return (
    <>
    <form onSubmit={onSubmit} >
    <div className='relative flex flex-col  bg-white shadow-lg w-115 mt-20 pl-5'>
      <div>
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>
      </div>
      <div className=' flex flex-col'>
        <label className='mt-3' htmlFor="firstname">
         <b>first Name</b> 
          </label>
        <input className='outline-none focus:bg-blue-100 bg-gray-50 h-12 w-105 pl-2' 
        type="text"
        name='firstname'
         placeholder='Enter firstname' 
         onChange={onChange}
         required
         value={user.firstname}
          />
        <label className='mt-2' htmlFor="lastname">
          <b>Last Name</b>
        </label>
        <input className='outline-none bg-gray-50 focus-within:bg-blue-100 h-12 w-105 pl-2' 
        type="text" 
        name='lastname' 
        placeholder='Enter lastname' 
        onChange={onChange}
        required 
          value={user.lastname}
        />
        <label className='mt-2' htmlFor="Email"> 
         <b>Email</b>
        </label>
        <input className='outline-none bg-gray-50 focus-within:bg-blue-100 h-12 w-105 pl-2' 
        type="email" 
        name='email' 
        placeholder='Enter email' 
        required
          onChange={onChange}
          value={user.email}
        />
        <label className='mt-2' htmlFor="password">
          <b>Password</b>
        </label>
      <input className='outline-none bg-gray-50 focus-within:bg-blue-50 h-12 w-105 pl-2' 
      type="password" 
      name='password' 
      placeholder='Password' 
      required 
        onChange={onChange}
        value={user.password}
      />
      <label className='mt-2' htmlFor="phonenumber">
        <b>Phone Number</b>
      </label>
        <input className='outline-none bg-gray-50 focus-within:bg-blue-50 h-12 w-105 pl-2' 
        type="phone" 
        name='phonenumber' 
        placeholder='phone number' 
        required 
          onChange={onChange}
          value={user.phonenumber}
        />
        <p className='mt-4'>By creating an account you agree to our 
        <a href="#">Term & privacy</a>
        </p>
        <div className='mb-4 mt-3'>
          <button className='flex justify-center items-center bg-blue-500 rounded-xl h-10 text-white w-105 ' type='submit'>Sign Up</button>
        </div>
      </div>
      
    </div>
    </form>
    <section className='absolute top-3 left-[560px]'>
      <p>
        Hello, my name is  <span className='text-blue-600'> {user.firstname} {user.lastname} </span>
         .My email address is 
          <span className='text-blue-600'> {user.email} </span>
          and my phone number is
        <span className='text-blue-600'> {user.phonenumber} </span>
      </p>
    </section>
    </>
  )  
};

export default FormHandle ;
