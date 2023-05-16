import React, {useContext} from 'react'
import { AuthContext } from '../../context/AuthContext';
import './NavBar.scss'


export default function NavBar() {

  const {logout, isLogin} =  useContext(AuthContext);

  return (
<nav>
    <div className="nav-wrapper navbar blue">
      <a href="/" className="brand-logo">ToDo</a>

      {
        isLogin 
        ?       <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><a href="/" onClick={logout}>Выйти</a></li>
                </ul>
        :       <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><a href="/">Войти</a></li>
                </ul>
      }

    </div>
  </nav>
  )
}
