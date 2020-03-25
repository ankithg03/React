import React, { Component } from 'react';
import ContextF from './ContextF';
import UserContext from './userContext';
class ContextE extends Component {
    render() {
        return (
            <div>
                ContextE Context {this.context}
                <ContextF></ContextF>
            </div>
        );
    }
}
ContextE.contextType = UserContext 
export default ContextE;
