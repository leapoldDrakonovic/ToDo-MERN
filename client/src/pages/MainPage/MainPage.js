import React, {useState, useContext, useCallback} from 'react'
import './MainPage.scss'
import axios from 'axios'
import {AuthContext} from '../../context/AuthContext'


export default function MainPage() {

  const [text, setText] = useState('');
  const {userId} = useContext(AuthContext)
  const createTodo = useCallback(async()=> {
      try {
        await axios.post('/api/todo/add', {text, userId}, {
          headers: {'Content-Type': 'application/json'}
        })
        .then((response)=> {
          console.log(response);
        })
      } catch (error) {
        console.log(error);
      }
  }, [])

  return (
    <div className='container'>
      <div className='main-page'>
        <h4>Add task</h4>
        <form className='form form-login' onSubmit={e => e.preventDefault()}>
          <div className='row'>
            <div className='input-field col s12'>

              <input
                onChange={(e)=> setText(e.target.value)}
                type='text'
                id='text'
                name='input'
                className='validate'
              />
              <label htmlFor="input">Task</label>

            </div>

            <div className="row">
              <button className='waves-effect waves-light btn btn blue' onClick={createTodo}>Add</button>
            </div>
          </div>
        </form>

        <h3>Active tasks</h3>
        <div className="todos">
          <div className="row flex todos-item">
            <div className="col todos-num">1</div>
            <div className="col todos-text">Text</div>
            <div className="col todos-buttons">
              <i className="material-icons blue-text">check</i>
              <i className="material-icons orange-text">warning</i>
              <i className="material-icons red-text">delete</i>
            </div>
          </div>
        </div>
  
      </div>
    </div>
  )
}
