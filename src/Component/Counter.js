import React, { Component } from 'react'
class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
   increment(){
       this.setState(
           (prevState,props)=>({
               count:prevState.count+ parseInt(props.add)
           })
       )
       console.log(this.state.count);
    //   this.setState(
    //   {
    //     count: this.state.count += 1
    //   }
    //   ,()=>{console.log('Call back value', this.state.count)}//before setstate be handled
    //   );
    //   console.log(this.state.count);
   }
   incrementFive(){
       this.increment();
    //    this.increment();
    //    this.increment();
    //    this.increment();
    //    this.increment();
   }
    render() {
        return (
            <div>
                <div>count  - {this.state.count}       </div>
                <button onClick={()=>this.incrementFive()}> Incre</button>    
            </div>
        )
    }
}

export default Counter
