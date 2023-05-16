import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import './loginWin.scss'
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';


export default function Login() {

  

  const [form, setform] = useState(
    {
      email: '',
      password: ''
    }
  );

  const {login} = useContext(AuthContext)

  const changeHandler = (event) => {
    setform ({...form, [event.target.name]: event.target.value})
    console.log(form);
  }


  const loginHandler = async () => {
    try {
      await axios.post('/api/auth/login', {...form}, {
        'headers':{
          'Content-Type': 'application/json'
        }
      })
      .then (response=> 
        login(response.data.token, response.data.userId)
      )
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className='container'>
              <div className='auth-page'>
                <h3>Authorization</h3>
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
                        <button className='wawes-effect wawes-light btn btn blue' onClick={loginHandler}>
                          Login
                        </button>

                        <Link to='/registration' href='/' className='btn-outline btn-reg' >Registrate</Link>
                    </div>
                    </form> 
                </div>
              </div>
  )
}
