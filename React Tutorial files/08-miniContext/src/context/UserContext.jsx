import React, { useState } from 'react'
import UserContext from './userContext'

function contextProvider({children}) {
    const [data, setdata] = useState('')
  return (
    <>
    <UserContext.Provider value = {{data,setdata}} >
         {children}
    </UserContext.Provider>
    </>
  )
}

export default contextProvider