import React from 'react'
import { createStore } from 'redux'
export function ReduxOne() {
    return (
        <div>
            This folder conatin all code and practice for Reducx

        </div>
    )
}

// practice one WE HAVE DECLEAR  constant and action type 
export const BUY_CAKE ='BUY_CAKE'
export const BuyCake =()=>{
    return{
        type:BUY_CAKE
    }
}
// now define reducer
export const initalState={
    numofCake: 10
}
export const cakeReducer =(state= initalState , action)=>{
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numofCake : state.numofCake-1
        }
            break;
    
        default: return state
            break;
    }
}
// now create redux store of storing state import ift frm redux and use a Provider in App and export store and pass data as a props
// ww will pass store as a  props in Provider
export const storex = createStore(cakeReducer)
//  export default storex

  
 
 


 
