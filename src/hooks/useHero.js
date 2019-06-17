import { useContext } from 'react';
import { Context } from '../contexts/context';

const useHero=()=>{
    const [state, setState]=useContext(Context)

    function updateBackground(background){
        setState(state => ({ ...state, background: background }));
    }

    function updateHeaders(headers){
        setState(state => ({ ...state, headers: headers }));
    }

    function updatePage(page){
        setState(state => ({ ...state, page: page }));
    }

    return{
        updateBackground,
        updateHeaders,
        updatePage,
        background:state.background,
        headers:state.headers,
        page:state.page
    }
}

export default useHero