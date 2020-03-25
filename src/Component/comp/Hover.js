import React, { Component } from 'react'

class Hover extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
        this.increment=this.increment.bind(this)
    }

    increment(){
        this.setState(prev=>{
         return{
             count:prev.count +1
         }
        })

    }
    render() {
        return (
            <div>
                <div onMouseOver={this.increment}>click  {this.state.count}</div>
            </div>
        )
    }
}
export default  Hover