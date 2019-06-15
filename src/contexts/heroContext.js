import React, {Component, createContext} from "react";


const HeroContext = createContext({
    backgroundImage:'',
    headers:{header:'', subheader:''},
    updateBackground:(background)=>{},
    updateHeaders:(headers)=>{}
})

export default HeroContext;