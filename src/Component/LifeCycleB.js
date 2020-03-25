import React, { Component } from 'react';

class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : ''
        }
        console.log(props)
    }
    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycle A getDerivedStateFromProps')
        return null
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
        // this.updateData();
        console.log(this.props.name)
        console.log('Component Did Update')
    }
    changeHandle = (event) =>{
        this.setState({
            name:event.target.value
        })
    }
    // shouldComponentUpdate(){
    //     console.log('`LifeCycleB` shouldComponentUpdate')
    //     return true
    // }
    // getSnapshotBeforeUpdate(prevProps, prevState){
    //     console.log('LifeCycleB getSnapshotBeforeUpdate')
    // }
    updateData(){
        this.setState({
                    name:this.props.name
                })
    }
    
    componentDidMount(){
        this.updateData();
        console.log("Component DidMount")
    }

    render() {
        console.log(this.props);
        console.log('Life CyecleA Render')
        return (
            <div>name
               <input defaultValue={this.props.name} type="Text" onChange={this.changeHandle}/>
               <button>Change State</button> 

            </div>
        );
    }
}

export default LifeCycleB;