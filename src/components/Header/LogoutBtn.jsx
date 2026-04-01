import React from 'react'
import { useDispatch } from 'react-redux'
import {logout} from '../../store/authSlice'
import authService from '../../appwrite/auth';

function LogoutBtn() {

    const dispatch = useDispatch();
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
    <button className='inline-block px-3 py-1 sm:px-6 sm:py-2 duration-200
     hover:bg-blue-100 rounded-full text-sm sm:text-base' onClick={logoutHandler}>Logout</button>
  )
}

export default LogoutBtn