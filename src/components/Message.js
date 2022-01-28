import React, { useReducer } from "react";

const Message = () => {
    const initialState = { message: "hi" };
    
    const reducer = (state, action) => {
        switch (action.type) {
            case "yell":
                return {
                    message: `HEY! I JUST SAID ${state.message}`
                };
            case "whisper": 
                return {
                    message: `excuse me, i just said ${state.message}`
                };
            default:
                return { message: 'hi' };
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);
    
    return (
        <>
            <p>Message: {state.message}</p>
            <button onClick={() => dispatch({type: "yell"})}>
                YELL
            </button>
            <button onClick={() => dispatch({type: "whisper"})}>
                whisper
            </button>
        </>
    );
}

export default Message;