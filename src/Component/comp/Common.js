import React, { Component } from 'react'

const newComponent =(OldComponent)=>{
 class Common extends Component {
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
         <OldComponent name ="hi" count ={this.state.count} func={this.increment} />
        )
    }
}
return Common
}
export default newComponent;