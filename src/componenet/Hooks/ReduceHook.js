import React,{useState,useReducer} from 'react'
import { Span } from './effectHook'

function ReduceHook() {
    return (
        <div className={"azz"}>
            <li>It is Quite Similar to Redux Libray</li>
            <li>Reducer mange the state of Componet on the Action we take</li>
            <li>It Take two Parameter <Span props="Reduce Function "/> and <Span props="State"/> Satte can be the Object or the inital value Of componet</li>
            <li><Span props='Reducer Function'/> is going to take two parameter state and action  and return value on the action we take  </li>
            <li>[] have two values state and Dispatch on what action it will  call reducer</li>
            <li>It is mostly used in Deep nested componets when passing down props</li>
            <li>we can set state of compnents the action we take</li>
            <li></li>
            <ReducrOne/>
            <ReduxTodo/>
        </div>
    )
}

export default ReduceHook
  const ACTIONS={
            INCREAMEMT:"increase",
            DECREMNT:"decrease"
        }
export function ReducrOne({props}) {
        const [state,dispatch]= useReducer(Reducer,{count:0})
    // crae a global oBject take make Life easy
      
        function Reducer(state,action) {
            switch (action.type) {
                case ACTIONS.INCREAMEMT:
                    return { count: state.count+5}
                    break;
                case ACTIONS.DECREMNT:  
                return { count: state.count-5}
                default:
                    return { state}
            }
        }
        function increment(){
            dispatch({type: ACTIONS.INCREAMEMT})
        }
        function decrement(){
            dispatch({type: ACTIONS.DECREMNT})
        }

    
    return(<div>
        <h6>Return Value on the Action we take</h6>
        <button onClick={increment}>Increase</button>
        <button onClick={decrement}>Decrease</button>
            <h3>Main STate : {state.count}</h3>

    </div>)
}
// seecond
// ?another Global Varivle 
const ACTION={
    ADD_TODO: 'add-todo',

}


export function ReduxTodo({props}) {
    
    const [todo,dispatch]=useReducer(reducer,[])
    const [name,setname]=useState("")
    function reducer(todo,action){
        switch (action.type) {
            case ACTION.ADD_TODO:
                return [...todo, newtodo(action.payload.name)]
                
                break;
        
            default:
                break;
        }
    }
    function newtodo(name){
        return {id: Date.now(), name:name, complete:false }
    }
   
    function qa(e){
        e.preventDefault();
        dispatch({type: ACTION.ADD_TODO, payload: {name: name} })
        setname('')
    }
   
    console.log(todo)
    return(<div>
        <form onSubmit={qa}>
        <li>Now we will creat a simaple todo app in <Span props="redux"/></li>
        <input placeholder="Value"    onChange={e=>e.target.value}/>
        </form>
        <h3>{name}</h3>
        <Rough/>
    </div>)
}



// ?reough work 
export function Rough({props}) {
        const [aq,setQa]=useState("")
//  Object with differnt Properties
        const haq=(e)=>{
                setQa(e.target.value)
               
                 console.log( {
                    id: Date.now(), 
                    nam: aq,
                    tpye: false
                })

            }
    return(<div>
        <li>Work rough</li>
        <li>Object with Properties</li>
        <input placeholde="Name" onChange={haq}/>
    </div>)

}