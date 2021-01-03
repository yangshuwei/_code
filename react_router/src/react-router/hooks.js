import React from 'react';
import RouterContext from './RouterContext';
import matchPath from './matchPath';
function useParams(){
    let match = React.useContext(RouterContext).match;
    return match ? match.params : {};
}
function useHistory(){
    return React.useContext(RouterContext).history
}
function useLocation(){
    return React.useContext(RouterContext).location
}
function useRouterMatch(path){
    
}