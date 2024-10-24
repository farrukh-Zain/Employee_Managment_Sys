import React, { useState } from 'react'

const login = ({handleLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e)=>{
        e.preventDefault()
        handleLogin(email,password)

        setEmail("")
        setPassword("")
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border border-emerald-600 p-20 rounded-xl'>
            <form 
             onSubmit={(e)=>{    
                submitHandler(e)
}} 
     className='flex flex-col itemns-center justify-center'>
                <input 
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}  
                required 
                className='outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email' 
                />
                <input
                 value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                required 
                 className='outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 text-xl rounded-full mt-3 placeholder:text-gray-400' type="password" placeholder='Enter Password'/>
                <button className='text-white mt-5 border-none  border-2 bg-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-white'>Log in</button>
            </form>
        </div>
      
    </div>
  )
}

export default login
