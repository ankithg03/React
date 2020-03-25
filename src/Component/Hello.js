import React, { Component } from "react"
class Hello extends Component{
    constructor(){
        super()
        this.state = {
            name : 'Welcome Visitor'
        }
    }
    render(){
        return (
            <div>
            <h1>
                {this.state.name}
            </h1>
            <button onClick={()=>this.changeMessaEsge()}>Subscribe</button>
            </div>
          )
    }
    changeMessage(){
        return this.setState({
            name: 'Thank You for Subscribing'
        })
    }
}
export default Hello