import React, {useEffect, useReducer} from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {Button, Container, Divider, Grid, Header, Image, Segment} from "semantic-ui-react";
import background from '../images/email.jpg'
import profileImage from '../images/profile.jpg'
import Context from "../contexts/context";
import heroReducer from "../contexts/reducer";
import {CURRENT_PAGE, UPDATE_BACKGROUND, UPDATE_HEADERS} from "../contexts/types";

const ContactPage = () => {

    const initialState={
        background:'',
        headers:{
            header:'',
            subheader:''
        },
        page:''
    }
    const [state, dispatch] = useReducer(heroReducer, initialState);

    const updateBackground = (background) => {
        dispatch({
            type: UPDATE_BACKGROUND,
            payload: background
        })
    };

    const headers = {header: '', subheader: ''};
    const updateHeaders = (headers) => {
        dispatch({
            type: UPDATE_HEADERS,
            payload: headers
        })
    };

    const currentPage=(page)=>{
        dispatch({
            type:CURRENT_PAGE,
            payload:page
        })
    }

    useEffect(() => {
        updateBackground(background);
        updateHeaders(headers)
        currentPage('/contact/')
    },);
    return (
        <Context.Provider
            value={{
                background: state.background,
                headers: state.headers,
                page:state.page
            }}>
            <Layout>
                <SEO title="Contact"/>
            </Layout>
        </Context.Provider>
    )
};


export default ContactPage