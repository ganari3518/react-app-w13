import React, {useState} from "react";

export default function DateContent(){
    const [funcShow, setFuncShow] = useState(true);
    return (
      <div className="container">
        <input type="button" value="toggle func" onClick={() => setFuncShow(!funcShow)}/>
        {funcShow ? <FuncComp></FuncComp> : null}
      </div>
    );
}

function FuncComp() {
    const [_date, setDate] = useState((new Date()).toString());
    const timer = setInterval(() => {
      setDate(new Date().toString());
      clearInterval(timer);
    }, 1000);
    return (
        <div className="container">
        <p>Date: {_date}</p>
        <input type="button" value="date" onClick={() => setDate((new Date()).toString())}/>
        {/* <input type="button" value="date" onClick={() => setDate((new Date()).toString())}/> */} 
        </div>
    );
}
