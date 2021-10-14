import { styled } from '@mui/material/styles';
import "./style.css"
import React,{useState,useEffect} from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';

function EffectHook() {
    return (
        <div >
            <Effect/>
            <With/>

            <Interval message="Hssza"/>
            <Three/>
            <CustButtons props="Prexx Me"/>
            <EfectSecond/>
        </div>
    )
}
 export default EffectHook; 

 export function Span({props}){
     return(<span className={"qws"}>{props}</span>)
 }

export function Effect (){ 

    return(<div className={"azz"}>
        <h2>Use Effectre -render componet we want and it use array of dependancy and when array change it re-render component</h2>
        <li>Only appaly on secific component re-rendering</li>
        <ul>useEffect is used insted of <Span props="ComponetDidMount"/>
        and <Span props="ComponetsDidupDate()"/>   </ul>
        <>It is also used for Side Effect Clean-up</>
        <ul>Examples of side-effects are fetch requests, manipulating DOM directly, using timer functions like setTimeout(),</ul>
        <ul><Span props="useEffect"/> Accept two pararmeter in  its argumnet (callBack,[dependancy] </ul>
            <ul><Span props="callBack"/> function contain side-Effect logic. It is exceuted right after change is being pushed</ul>
            <ul><Span props="dependencies"/> is an array sueEffect excute callbackonly dependacy have changed between rendering </ul>
        <ul>when dependacy is not given touseEffect side-effect run after every dependacy</ul>
        <ul><Span props="Empty Array "/> run after inital rendering</ul>    
        <ul><Span props="Side Effect"/> What are they</ul>
            <ul>They are basically anything that is outside of scope function being executed </ul>
            <li>API requst to back end </li>
            <li>Subscription </li>
            <ul>It re render our component</ul>
    </div>)
}
export function Interval({message}) {
     
        useEffect(()=>{
            const Id= setInterval(()=>{
                console.log(message)
            },2000);
            return ()=>{
                clearInterval(Id)
            }
        },[message])
    
    
    return (<div>
        <h2>I am going to cosole.log "{message}"</h2>
        <Pass message="hamza"/>
    </div>)
}
export function Pass({message}) {
    useEffect(() => {
        const id = setInterval(() => {
          console.log(message);
        }, 2000);
        return () => {
          clearInterval(id);
        };
      }, [message]);
      return <div>I'm logging to console "{message}"</div>;
}
// exapmle two 

const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });
  
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));
  
export function CustButtons({props,two}) {
    return (
      <Stack spacing={2} direction="row">
        <ColorButton variant="contained">{props}</ColorButton>
        {/* <BootstrapButton variant="contained" disableRipple>
          {two}
        </BootstrapButton> */}
      </Stack>
    );
  }

export function Three(){
    const [ pa,setPa]=useState(1);
    useEffect(()=>{
        document.title = `You clicked ${pa} times`;
    }, [pa]);
    return(<div className={'azz'}>
        <h4>Thired Examples
        <h1> You click {pa} </h1>

            <ul>Click Button to see effext</ul>
            <button onClick={()=>setPa(pa+1)}>Prexx Me</button>
        </h4><br/>
        <Secific/>
    </div>) }

    // secific
    export function Secific(params) {
      const [ja,setJa]=useState('post')
       useEffect(()=>{
         console.log("Apply Change")
       },[ja])
      return (
        <div>
          <li>If we click same Button Many Times it wil not render Change It only apply if depency array chnages</li>
          <button onClick={()=>setJa("Happy Happpen")}>Prex Hapy</button>
          <button onClick={()=>setJa("user Happpen")}>Prex User</button>
          <button onClick={()=>setJa("All Happpen")}>Prex All</button>
          <h2>{ja}</h2>
        </div>)
    }
    // another
    export function EfectSecond({props}){
      const [lo,setLo]=useState("posts")
     const [jso,setJso]=useState([])
     useEffect(()=>{
          fetch(`https://jsonplaceholder.typicode.com/${lo}`)
      .then(response => response.json())
      .then(json => setJso(json))
     
    },[lo])
     return( <div>
        <li>This is another example of useEffect() Hook</li>
        <li>Now we will render datat from ApI JSON</li>
          <button onClick={()=>setLo("posts")}>Post</button>
          <button onClick={()=>setLo("users")}>users</button>
          <button onClick={()=>setLo("comments")}>Comment</button>
        {jso.map(items=>{
          return <li className={"azz"}>{JSON.stringify(items)}</li>
        })}
          
      </div>
      )}
      // four 
      export function With(params) {
        const [pa,setpa]=useState(window.innerWidth)
        const handle =()=>{
          setpa(window.innerWidth)

        }
        useEffect(()=>{
          window.addEventListener("resize",handle)
        },[])
        return(<div>
          <h3>Sixe of screen is {pa}</h3>
          <li>Adding evet listiner to inner Screen and adding clean-up It increase the speed of App</li>
        </div>)
      }