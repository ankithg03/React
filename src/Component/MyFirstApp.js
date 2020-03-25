import React, { Component } from "react";
import "../App.css";
//  
// import Hero from "./Hero";
// import ErrorBoundary from "./ErrorBoundary";
// import FRParentInput from "./FRParentInput";
// import FocusInput from "./FocusInput";
// // import ParentComp from "./ParentComp";
// import RefsDemo from "./RefsDemo";
// import FragmentDemo from "./FragmentDemo";
// import PureComp from "./PureComp";
// import RegularComp from "./RegularComp";
// import ParentComp from "./ParentComp";
// import LifeCycleA from "./LifeCycleA";
// import FormComponent from "./FormComponent";
// import EventBind from "./EventBind";
// import ConditionalRender from "./ConditionalRender";
// import Counter from "./Counter";
// import FunctionClick from "./FunctionClick";
// import ClassClick from "./ClassClick";
// import Greet from './Greet'
// import Hello from './Hello'
class MyFirstApp extends Component{
    incrementCount = ()=>{
        console.log('df');
    }
    render(){
        return (
            <div className="App">
                {/* React & HTTP (axios)*/} 

                {/* Context 
                    <ContextA onClick = {incrementCount}>

                    </ContextA>
                    <ContextB>
                        
                    </ContextB>
                     <UserProvider value ="ANKITH G"> 
                        <ContextC>

                        </ContextC>
                     </UserProvider> 
                */}
                {/* REnder Props*/}
                {/* <CounterRender render = { (count, incrementCount) => (
                    
                    <ClickCounter2 count = {count} incrementCount = {incrementCount}></ClickCounter2>

                    )

                } />

                <CounterRender render = {(count, incrementCount) => (<HoverCounter2 count ={count} incrementCount = {incrementCount}/>)} />

                */}
                {/* Higher Order Component : Not a proper way */}
                <ClickCounter name="Ankith G" incrementNumber ="5">

                </ClickCounter>
                <HoverCounter name = "Bashid" incrementNumber ="8">

                </HoverCounter>
                {/* Error Boundary 
                
                <ErrorBoundary>
                    <Hero heroname="batman">
                    
                    </Hero>
                </ErrorBoundary>
                <ErrorBoundary>
                    <Hero heroname="superman">
                    
                    </Hero>
                </ErrorBoundary>
                <ErrorBoundary>
                    <Hero heroname="joker">
                    
                    </Hero>
                </ErrorBoundary>
                
               */}
                {/* Forwarding refs  */}
                {/* <FRParentInput>

                </FRParentInput> */}
                {/* Refs to Class  */}
                {/* <FocusInput></FocusInput> */}
                {/* Refs to input Element */}
                {/* <RefsDemo></RefsDemo> */}
                {/* React Memo  */}
                {/* <ParentComp></ParentComp> */}
                {/* Pure Component  */}
                {/* <ParentComp></ParentComp> */}
                {/* Fragment  */}
                {/* <FragmentDemo>
                    
                </FragmentDemo> */}
                {/* LifeCycle  */}
                {/* <LifeCycleA>

                </LifeCycleA> */}
                {/* Form Component  */}
                {/* <FormComponent>

                </FormComponent> */}
                {/* List Rendering  
                <ListRender>

                </ListRender>*/}
                {/* Conditional Rendering  */}
                {/* <ConditionalRender>

                </ConditionalRender> */}
                {/* Bind Event Handler  */}
                {/* <EventBind>

                </EventBind> */}
                {/* Props and State  */}
                {/* <Greet heroName="Bashid"/> */}
                {/* Functional Component  */}
                {/* <FunctionClick>

                </FunctionClick>
                <ClassClick>

                </ClassClick>
                {/* Counter */}
                {/*<Counter add="5"/> */}
               {/* {/* Greet */}
               {/* <Greet name="Ankith"/>
               <Greet name="Bashid"/>
               <Greet name="Rajath"/>
               <Greet name="Mohith"/>
               <Hello name="Sandesh"/> */}
            </div>
          );
    }
}


export default MyFirstApp;
