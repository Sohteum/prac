import Viewer from "./components/Viewer.jsx";
import Controller from "./components/Controller.jsx";
import "./App.css"
import {useState, useEffect, useRef} from "react";
import Even from "./components/Even.jsx";

function App() {

    const [count, setCount] = useState(0);
    const [input, setInput] = useState("");

    const isMount = useRef(false);

    //1. 마운트 : 탄생
    useEffect(()=>{
        if(!isMount.current) {
            isMount.current = true;
        }
        console.log("mount");
    },[])

    //2. 업데이트 : 변화, 리렌더링
    useEffect(()=>{
        console.log("update");
    })

    //3. 언마운트 : 죽음

    const onClickButton =(value)=>{
        setCount(count +value);
    }

    return (
        <div className='App'>
            <h1>Simple Counter</h1>
          <section>
            <input onChange={(e)=>{
            setInput(e.target.value);}
            }/>
          </section>
            <section>
                <Viewer count={count}/>
                {count % 2 === 0 ? <Even/> : null}
            </section>
            <section>
                <Controller onClickButton={onClickButton}/>
            </section>

        </div>
    )
}

export default App;
