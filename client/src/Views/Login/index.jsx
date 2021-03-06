import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signIn } from '../../Controllers/Redux/authSlice'


const Login = () => {
  const dispatch = useDispatch()
  const [formInput, setFormInput] = useState({
    name: '',
    password: '',
  })
  const handleChange = (e) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(signIn(formInput))
  }
  return (
    <div className="login">
      <form action="post" className="login_panel">
        <h1>Login</h1>
        <input type="text" name='name' placeholder='name' onChange={handleChange} value={formInput.name} />
        <input type="password" name='password' placeholder='Password' onChange={handleChange} value={formInput.password} />
        <button type='submit' onClick={handleSubmit}>Login</button>
      </form>
    </div>
  )
}
export default Login