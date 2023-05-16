import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'
import Auth from './pages/AuthPage/Auth'
import Login from './components/loginWin/Login'
import Registration from './components/loginWin/Registration'

export const useRoutes = (isLogin) => {
    if(isLogin) {
        return (
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='*' element={<Navigate to={'/'}/>}/>
            </Routes>
        )
    }

    return (
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/registration' element={<Registration/>}/>
            <Route path='*' element={<Navigate to={'/login'}/>}/>
        </Routes>
    )
}