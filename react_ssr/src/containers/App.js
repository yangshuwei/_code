import React,{Fragment} from 'react';
import {renderRoutes} from 'react-router-config';
import Header from '../components/Header'
let App = (props)=>{
    return(
        <Fragment>
            <Header staticContext={props.staticContext}/>
            {renderRoutes(props.route.routes)}
          </Fragment>
    )
}
export default App;