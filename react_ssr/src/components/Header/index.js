import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';
import styles from './header.css'

const Header = (props)=>{
  if(props.staticContext){
    props.staticContext.csses.push(styles._getCss())
  }
  return(
    <Fragment>
      <div>
        <ul className="clo">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/user">user</Link>
          </li>
          <li>
            <Link to="/user/detail">detail</Link>
          </li>
        </ul>
      </div>
    </Fragment>
  )
}

export default Header