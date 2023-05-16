


import React from 'react'
import './Auth.scss'
import {Route, Routes, Navigate} from 'react-router-dom'

import Login from '../../components/loginWin/Login'
import Registration from '../../components/loginWin/Registration' 


export default function Auth() {




  return (
    
      <Routes>
        <React.Fragment>
          <Route path='/login' element={<Login/>}/>
          <Route path='/registration' element={<Registration/>}/>
          <Route path='*' element={<Navigate to={'/login'}/>}/>
        </React.Fragment>
      </Routes>
    
  )


}
