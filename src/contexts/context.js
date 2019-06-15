import React, {Component, createContext} from "react";


const Context = createContext({
    backgroundImage:'',
    headers:{header:'', subheader:''},
    page:'',
    updateBackground:(background)=>{},
    updateHeaders:(headers)=>{},
    currentPage:(page)=>{}
})

export default Context;