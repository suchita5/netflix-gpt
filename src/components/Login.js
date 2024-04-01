import React, { useState } from 'react'
import { Header } from './Header'

const Login = () => {
  const[isFormSignIn, setIsFormSignIn] = useState(true);

  const toggleSignInForm = () => {
    setIsFormSignIn(!isFormSignIn)
  }
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img 
        src='https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg'
        />
      </div>
      <form className='w-3/12 absolute p-12 my-36 bg-black mx-auto right-0 left-0 text-white bg-opacity-80'>
        <h1 className='font-bold text-2xl'>{isFormSignIn ? "Sign In" : "Sign Up"}</h1>
        {!isFormSignIn && (
          <input 
          type='text'
          placeholder='Full Name'
          className='p-2 my-2 w-full bg-gray-800'
           />
        )}
        <input 
        type='text' 
        placeholder='email address' 
        className='p-2 my-2 w-full bg-gray-800' 
        />
        <input 
        type='password' 
        placeholder='password' 
        className='p-2 my-2 w-full bg-gray-800' 
        />
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isFormSignIn ? "Sign In" : "Sign Up"}</button>
        <p className='py-2 cursor-pointer' onClick={toggleSignInForm}>
          {isFormSignIn ? "New to Netflix? Sign up now" : "Already a user? Sign In"}  
        </p>
    </form>
    </div>
  )
}

export default Login