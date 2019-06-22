 /**
 * File name: context.js
 * Author's name: Tomoya 
 * Web site name: Tomoya Kuroda
 * File description: this provides background image url, hero text and current page information
 */

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