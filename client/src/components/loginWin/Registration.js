import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './loginWin.scss'
import axios from 'axios'



export default function Registration() {

  const [form, setform] = useState(
    {
      email: '',
      password: ''
    }
  );

  const changeHandler = (event) => {
    setform({...form, [event.target.name]: event.target.value})
    console.log(form);
  }


  // Тут проблема в url
  const registerHandler = async () => {
    try {
      await axios.post('/api/auth/registration', {...form}, {
        'headers':{
          'Content-Type': 'application/json'
        }
      })
      .then (response=> console.log (response))
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='container'>
        <div className='auth-page'>
            <h3>Registration</h3>
                <form className='form form-login' onSubmit={e=>e.preventDefault()}>
                    <div className='row'>
                        <div className='input-field col s12'>
                            <input 
                              type="email"
                              name="email"
                              className='validate'
                              onChange={changeHandler}
                            />
                            <label htmlFor='email'>Email</label>
                        </div>

                        <div className='input-field col s12'>
                            <input 
                              type="password"
                              name="password"
                              className='validate'
                              onChange={changeHandler}
                            />
                            <label htmlFor='password'>Password</label>
                        </div>
                    </div>

                    <div className='row'>
                      <button className='wawes-effect wawes-light btn blue' onClick={registerHandler}>
                        Registrate
                      </button>

                      <Link to='/login' className='btn-outline btn-reg' >Login</Link>
                    </div>
                    
                </form>
        </div>
    </div>
  )
}
