import React, { useState, useEffect } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {
  // const [username, setFirstname] = useState('')

  // useEffect(() => {
  //   if (!data) {
  //     setFirstname('Admin')
  //   } else {
  //     setFirstname(data.firstName)
  //   }
  // }, [data])

  const logOutUser = ()=>{
     localStorage.setItem('loggedInUser','')
     props.changeUser('')
    //  window.location.reload()

  }

  return (
    <div className='flex items-center justify-between'>
      <h1 className='text-2xl'>Hello <br className='text-3xl font-semibold' />username</h1>
      <button onClick={logOutUser} className='bg-red-500 text-lg font-medium text-white px-5 py-2 rounded'>Log Out</button>
    </div>
  )
}

export default Header
