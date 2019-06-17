import React, { createContext, useState} from "react";
import background from '../images/background.jpg'


const Context = createContext([{}, ()=>{}])

const initialState={
    background:background,
    header:'header',
    subheader:'subheader',
    page:'/'
}

const ContextProvider=(props)=>{
    const [state,setState]=useState({initialState})
    return (
        <Context.Provider value={[state, setState]}>
        {props.children}
        </Context.Provider>
    )
}

export {Context, ContextProvider};