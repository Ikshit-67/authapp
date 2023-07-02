"use client";

import Link from 'next/link';
import React from 'react'
import { useRouter } from 'next/navigation';
// import { axios } from 'axios';

const Login = () => {

  const [user, setUser] = React.useState({
    email:"",
    password:""
  })

  const onLogin =async () => {
    // do somthing
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>

      <h1>Login</h1>
      <hr />

      {/* email input START*/}
      <label htmlFor="email">email</label>
      <input className='p-2 border-gray-300 rounded-lg mb-6'
        id='email'
        type="text"
        value={user.email}
        onChange={(e) => setUser({...user, email: e.target.value})}
        placeholder='email'/>
      {/* email input END */}

      {/* password input START*/}
      <label htmlFor="password">password</label>
      <input className='p-2 border-gray-300 rounded-lg mb-6'
        id='password'
        type="password"
        value={user.password}
        onChange={(e) => setUser({...user, password: e.target.value})}
        placeholder='password'/>
      {/* password input END */}

      {/* Button START */}
        <button
        onClick={onLogin}
        className='p-2 border border-gray-300 r mb-6 rounded-lg'
        >Login 😉 </button>
      {/* Button END */}

      {/* Signup page link START */}
        <Link href="/signup">New here? Signup here !</Link>
      {/* Signup page link END */}
    </div>
  )
}

export default Login