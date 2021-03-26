import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';

const Header = (props)=>{
  return(
    <Fragment>
      <div>
        <ul>
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