import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'
import { data } from 'autoprefixer'

const App = () => {


   const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
   const [userData, setUserData] = useContext(AuthContext)

   useEffect(() =>{
    const loggedInUser  = localStorage.getItem('loggedInUser','')
    
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
       setUser(userData.role)
       setLoggedInUserData(userData.data)

    }
   }, []);

  //  useEffect(()=>{
  //     if(authData){
  //       const loggedInUser = localStorage.getItem("loggedInUser")
  //       if(loggedInUser){
  //         setUser(loggedInUser.role)
  //       }
  //     }
  //  }, [authData]);


   const handleLogin = (email,password)=>{
        if(email == 'admin@me.com' && password == '123'){
           setUser({role:'admin'})
           localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
        }else if(userData){
          const employee = userData.find((e)=>email == e.email && e.password == password)
          if(employee){
            setUser({role:'employee'})
            setLoggedInUserData(employee)
           localStorage.setItem('loggedInUser', JSON.stringify({role:'employee', data:employee}))
          }  
        }
        else{
          alert("Invalid Credentials")
        }
   } 
   

  
  return (
    <>
    {user?.role === 'admin' ? (
      <AdminDashboard changeUser={setUser} />
    ) : user?.role === 'employee' ? (
      <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
    ) : (
      <Login handleLogin={handleLogin} />
    )}

{/* {!user ? <Login handleLogin={handleLogin} />: ''}
{user == 'admin' ? <AdminDashboard /> : ( user == 'employee'?<EmployeeDashboard data={loggedInUserData} /> : null  ) } */}


{/* <EmployeeDashboard /> */}
{/* <AdminDashboard /> */}
  </>
  )
}

export default App
