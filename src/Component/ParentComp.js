// import React, {PureComponent} from 'react'
import React, {Component} from 'react'
// import RegularComp from './RegularComp'
// import PureComp from './PureComp'
import MemoComp from './MemoComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Ankith'
        }
    }
    
    componentDidMount(){
        setInterval(()=>{
                this.setState({
                    name:'Ankith'
                })
        },2000)
    }
    render() {
        console.log('Parent Comp Render');
        return (
            <div>
                MemoComp
                <MemoComp name={this.state.name}></MemoComp>
                {/* ParentComp
                <RegularComp name={this.state.name}></RegularComp>
                <PureComp name={this.state.name}></PureComp> */}
            </div>
        )
    }
}

export default ParentComp
