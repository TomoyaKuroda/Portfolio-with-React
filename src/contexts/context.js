import React, {Component, createContext, useState} from "react";


// const Context = createContext({
//     backgroundImage:'',
//     headers:{header:'', subheader:''},
//     page:'',
//     updateBackground:(background)=>{},
//     updateHeaders:(headers)=>{},
//     currentPage:(page)=>{}
// })

const Context = createContext([{}, ()=>{}])

const initialState={
    background:'',
    headers:{header:'', subheader:''},
    page:''
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