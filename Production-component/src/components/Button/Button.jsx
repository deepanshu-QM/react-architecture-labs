
import { useState } from "react";

function Button(){
    let [count, setCount] = useState(0);

    return (
        <div>
            <CustomButton  count={count} setCount={setCount}></CustomButton>
        </div>
    )
}


//Component 
function CustomButton(props){

    function onClickHandler(){
        props.setCount(props.count+1);
    }
    return (
    <button onClick={onClickHandler}>counter {props.count}</button>
    );
}

export default Button;

/*
function App(){
    let [count ,setCount] = useState(0);
    function onClickHandler(){
        setCount(count+1)
    }
    return (
        <div>
            <button onClick={onClickHandler}>counter : {count}</button>
        </div>
    )
}    */