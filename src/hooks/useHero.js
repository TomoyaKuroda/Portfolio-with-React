import { useContext } from 'react';
import { Context } from '../contexts/context';

const useHero=()=>{
    const [state, setState]=useContext(Context)

    function updateBackground(background){
        setState(state => ({ ...state, background: background }));
    }

    function updateHeader(header){
        setState(state => ({ ...state, header: header }));
    }

    function updateSubheader(subheader){
        setState(state => ({ ...state, subheader: subheader }));
    }

    function updatePage(page){
        setState(state => ({ ...state, page: page }));
    }

    return{
        updateBackground,
        updateHeader,
        updateSubheader,
        updatePage,
        background:state.background,
        header:state.header,
        subheader:state.subheader,
        page:state.page
    }
}

export default useHero