import React from 'react' 

const withCounter = (WreappedComponent, incrementCount) =>{
    class withComponent extends React.Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }
        incrementCount = () =>{
            this.setState(prevState=>{
                return{count:prevState.count+incrementCount}
            })
        }
        render(){
            return <WreappedComponent count = {this.state.count} incrementCount = {this.incrementCount} {... this.props}/>
        }
    }
    return withComponent
}
export default withCounter