import React, { useEffect, useState } from 'react';
class Home extends React.Component{
    state = { number: 0 }
    componentDidMount(){
        
        this.setState({
            number:2
        })
    }
    render(){
        return(
            <div>{this.state.number}</div>
        )
    }
}
export default Home