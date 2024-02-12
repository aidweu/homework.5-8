import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./redux/store/userSlice";

function App() {
    // const [inpValue, setInpValue] = useState("");
    // const value = useSelector(state => state)

    const dispatch = useDispatch()

    // const { todos, isLoading } = useSelector(state => state.todoReducer)
    const { user } = useSelector(state => state.userReducer)
    const [loginInput, setLoginInput] = useState("atuny0")
    const [passwordInput, setPasswordInput] = useState("9uQFF1Lh")

    const addTodo = () => {
        fetch('https://dummyjson.com/auth/todo/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({
                todo: "todo",
                userId: user.id
            })
        })
            .then(res => res.json())
            .then(console.log);
    }

    console.log(user);

    // const calculate = (e) => {
    //     switch (e.target.innerText) {
    //         case "+":
    //             return dispatch({type: "PLUS", payload: Number(inpValue)})
    //         case "-":
    //             return dispatch({type: "MINUS", payload: Number(inpValue)})
    //         case "*":
    //             return dispatch({type: "MULTIPLY", payload: Number(inpValue)})
    //         case "/":
    //             return dispatch({type: "DIVIDE", payload: Number(inpValue)})
    //         default:
    //             break;
    //     }
    // }

    useEffect(() => {
        dispatch(login())
    }, [])

    return (
        <div className="App">
            <h1>
                <input value={loginInput} onChange={(e) => setLoginInput(e.target.value)} type="text" />
                <input value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} type="text" />
                <button onClick={() => dispatch(login({ login: loginInput, password: passwordInput }))}>submit</button>
                <button onClick={() => addTodo()}>add</button>

            </h1>
        </div>
    );
}

export default App;