import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            message : "hello"
        }

        // this.clickMethod = this.clickMethod.bind(this)
    }

    // clickMethod(){
    //     this.setState({
    //         message : "Hello Ankith G"
    //     }
           
    //     )
    // }
    clickMethod = () => {
        this.setState({
            message:"Hello Ankith G"
        })   
    }
    render() {
        return (
            <div>
                <div>
                    {this.state.message}
                </div>
                {/* <button onClick = {this.clickMethod.bind(this)}>
                    Click
                </button> */}
                {/* <button onClick = {()=>this.clickMethod()}>
                    Click
                </button> */}
                 <button onClick = {this.clickMethod}>
                    Click
                </button> 

            </div>
        )
    }
}

export default EventBind
