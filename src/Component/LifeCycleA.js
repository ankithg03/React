import React, { Component } from 'react';
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : ''
        }
       this.changeState = this.changeState.bind(this)
    }
    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycle A getDerivedStateFromProps')
        return null
    }

    changeHandle = (event) =>{
        this.setState({
            name:event.target.value
        })
    }
    shouldComponentUpdate(){
        console.log('LifeCycleA shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifeCycleA getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('Component Did Update')
    }
    changeState = ()=>{
        this.setState({
            name: "name changed"
        })
    }
    componentDidMount(){
        console.log("Component DidMount")
    }

    render() {
        console.log('Life CyecleA Render')
        return (
            <div>name
               <input defaultValue={this.state.name} type="Text" onChange={this.changeHandle}/>
               <button onClick={this.changeState}>Change State</button> 
               <LifeCycleB name={this.state.name}>
                    LifeCycleB
               </LifeCycleB>
            </div>
        );
    }
}

export default LifeCycleA;