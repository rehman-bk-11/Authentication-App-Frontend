import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'; 
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate=useNavigate()
  const dispatch = useDispatch()

  const handleLogut =()=>{
    dispatch(logout())
    navigate("/login")
  }
  return (
    <>
    <div>Dashboard</div>
    <button className='button' onClick={handleLogut }>
              Logout
            </button>

    </>
  )
}

export default Dashboard