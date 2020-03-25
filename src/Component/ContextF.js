import React, { Component } from 'react';
import { UserConsumer } from './userContext';

class ContextF extends Component {
    render() {
        return (
           <UserConsumer>
                
                    {
                        (username)=>{
                        return <div>Helloe {username}</div>    
                        }
                    }
                
           </UserConsumer>
        );
    }
}

export default ContextF;