import React, { Component } from 'react'
import newComponent from './Common'

class Click extends Component {
    constructor(props) {
        super(props)
    
    }


    render() {
        return (
            <div>
                <button onClick={this.props.func}> {this.props.name}click{this.props.count}</button>
            </div>
        )
    }
}
export default  newComponent(Click)