import React, { Component } from 'react';

class ConditionalRender extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:true
        }
    }
    customeMessage = ()=>{
         
        if(this.state.isLoggedIn){
            return (<div>Hi Ankith</div>)
        }
        else{
            return (<div>Hi Guest</div>)
        }
    }
    changeState = () =>{
        if(this.state.isLoggedIn){
            this.setState({
                isLoggedIn:false
            })  
        }else{
            this.setState({
                isLoggedIn:true
            })  
        }
       
    }
    render() {
            return (
                <div>
                   {this.customeMessage()}
                   <button onClick={this.changeState.bind(this)}>
                       Click me
                   </button>
                </div>
            );
    }
}

export default ConditionalRender;