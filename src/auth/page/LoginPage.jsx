import React from 'react'
import { useNavigate } from 'react-router-dom';
  
const LoginPage = () => {
  const navigate = useNavigate();

  const onLogin = () => {
    navigate('/', {
      replace: true
    });
  }
  
  return (
    <div className="flex flex-col justify-center pt-20 w-96 gap-6 p-6">
      <h1 className='normal-case text-2xl font-bold'>Login</h1>
      <hr />
    <div className='flex justify-center'>
      <button
        className="btn btn-outline"
        onClick={ onLogin }
      >
      Login
      </button>
    </div>
  </div>
  )
}
export default LoginPage
