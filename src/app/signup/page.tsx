"use client";

import Link from 'next/link';
import React from 'react'
import { useRouter } from 'next/navigation';
// import { axios } from 'axios';

const SignUp = () => {

  const [user, setUser] = React.useState({
    email:"",
    password:"",
    username:""
  })

  const onSignup =async () => {
    // do somthing
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>

      <h1>Signup</h1>
      <hr />

      {/* username input START*/}
      <label htmlFor="username">username</label>
      <input className='p-2 border-gray-300 rounded-lg mb-6'
        id='username'
        type="text"
        value={user.username}
        onChange={(e) => setUser({...user, username: e.target.value})}
        placeholder='username'/>
      {/* username input END */}

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
        onClick={onSignup}
        className='p-2 border border-gray-300 r mb-6 rounded-lg'
        >Signup 🙃 </button>
      {/* Button END */}

      {/* Login page link START */}
        <Link href="/login">Already have an account? Login here !</Link>
      {/* Login page link END */}
    </div>
  )
}

export default SignUp