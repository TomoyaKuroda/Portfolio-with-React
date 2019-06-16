import React, {useEffect, useReducer} from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {Button, Card, Container, Grid, Header, Icon, Image, Label, Segment} from "semantic-ui-react";
import background from '../images/barrie_snow.jpg'
import profileImage from '../images/profile2.jpg'
import Context from "../contexts/context";
import heroReducer from "../contexts/reducer";
import {CURRENT_PAGE, UPDATE_BACKGROUND, UPDATE_HEADERS} from "../contexts/types";

const AboutPage = () => {

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

    const aboutHeaders = {header: "I develop to change the world and make it a better place.", subheader: 'Tomoya Kuroda'};
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
        updateBackground(background)
        updateHeaders(aboutHeaders)
        currentPage('/about/')
    },);
    return (
        <Context.Provider
            value={{
                background: state.background,
                headers: state.headers,
                page: state.page
            }}>
            <Layout>
                <SEO title="About Me"/>
                <Container>
                    <Card.Group centered>
                            <Card>
                                <Image src={profileImage} wrapped ui={false} />
                                <Card.Content>
                                    <Card.Header>Tomoya Kuroda</Card.Header>
                                    <Card.Meta>
                                        <span className='date'>Started living in Canada since Aug 2017</span>
                                    </Card.Meta>
                                    <Card.Description>
                                        I am a Georgian College student living in Barrie.
                                        I enjoy watching videos, playing games, and developing web applications.
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                    </Card.Group>
                </Container>
            </Layout>
        </Context.Provider>
    )
};


export default AboutPage