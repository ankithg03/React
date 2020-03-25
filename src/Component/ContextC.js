import React, { Component } from 'react';
import ContextE from './ContextE';

class ContextC extends Component {
    render() {
        return (
            <div>
                ContextC
                <ContextE></ContextE>
            </div>
        );
    }
}

export default ContextC;