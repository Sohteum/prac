import Viewer from "./components/Viewer.jsx";
import Controller from "./components/Controller.jsx";
import {useState} from "react";

function App() {

    const [count, setCount] = useState(0);

    // const onClickChange=(value)=>{
    //     setCount(count + value);
    // }

    function onClickChange(value){
        setCount(count + value);
    }

  return (
    <div className="App">
        <h1>Simple Counter</h1>
        <section><Viewer count={count}/></section>
        <section><Controller onClickChange={onClickChange} /></section>
    </div>
  )
}

export default App
