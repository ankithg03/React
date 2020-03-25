import React, { Component } from 'react';

class FormComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             UserName:'',
             Skill:'',
             Age:'',
             message:''

        }
    }
    handleEvent = (event)=>{
        
            this.setState(
                {
                    UserName: event.target.value
                }, this.changeData
            )
            this.changeData()
    }
    changeData = () =>{
        if(this.state.UserName.length>0){
           
            this.setState(
                {
                    message: "Hello " + this.state.UserName
                }
            )
        }else{
            this.setState(
                {
                    message: ""
                }
            )
        }
    }
    render() {
        return (
           <form>
               <div>
                   <label>
                       UserName
                   </label>
                   <input type="text" defaultValue={this.state.UserName} onChange={this.handleEvent}/>
               </div>
               <div>
                   <label>
                       Skill
                   </label>
                   <input type="text"  defaultValue={this.state.Skill}/>
               </div>
               <div>
                   <label>
                       Age
                   </label>
                   <input type="text" defaultValue={this.state.Age}/>
               </div>
               <div>
                   {this.state.message}
               </div>
           </form>
        );
    }
}

export default FormComponent;