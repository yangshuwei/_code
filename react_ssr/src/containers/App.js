import React,{Fragment} from 'react';
import {renderRoutes} from 'react-router-config';
import Header from '../components/Header'
let App = (props)=>{
    console.log(props.route.components)
    return(
        <Fragment>
            <Header />
            {renderRoutes(props.route.routes)}
          </Fragment>
    )
}
export default App;