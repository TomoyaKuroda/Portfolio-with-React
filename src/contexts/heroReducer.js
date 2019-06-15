import {UPDATE_BACKGROUND, UPDATE_HEADERS} from "./types";
const updateBackground= (background,state)=>{
    return{
        ...state,
        background:background
    }
}
const updateHeaders= (headers,state)=>{
    return{
        ...state,
        headers:headers
    }
}
export default (state, action)=>{
    switch(action.type){
        case UPDATE_BACKGROUND:
            return updateBackground(action.payload, state)
        case UPDATE_HEADERS:
            return updateHeaders(action.payload, state)
        default:
            return state
    }
}