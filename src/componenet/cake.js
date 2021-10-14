import React from 'react'
import { BuyCake } from './redux/main'
import { connect } from 'react-redux'
function Cake(props) {
    return (
        <div>
            <h2>Number of cake : {props.numofCake}</h2>
            <button onClick={props.BuyCake}>Press me</button>
                <h4>we have created as basic React app that will Used Readux libary</h4>
                   <p>
                       <ul>Action Creator</ul>
                       <ul>Reducer</ul>
                       <ul>Store that hold values</ul>
                       <ul>connect the components</ul>
                   </p>
                    
        </div>
    )
}
//cake is the main componet in which we want  to dispatch buy cake action on clcik  creating Objects and dispatch method
const StatetoProps = state=>{
    return{
        numofCake: state.numofCake
    }
}
const DispatchtoProps=dispatch=>{
        return{
            BuyCake:()=>dispatch(BuyCake())
        }
}
// now we will connect these two functions with store
export default  connect(StatetoProps,
     DispatchtoProps)
    (Cake)
