import React, {useEffect, useReducer} from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {Button, Grid, Header, Image, Segment} from "semantic-ui-react";
import background from '../images/background.jpg'
import profileImage from '../images/profile.jpg'
import HeroContext from "../contexts/heroContext";
import heroReducer from "../contexts/heroReducer";
import {UPDATE_BACKGROUND, UPDATE_HEADERS} from "../contexts/types";

const IndexPage = ({mobile}) => {

    const initialState={
        background:'',
        headers:{
            header:'',
            subheader:''
        }
    }
    const [state, dispatch] = useReducer(heroReducer, initialState);

    const updateBackground = (background) => {
        dispatch({
            type: UPDATE_BACKGROUND,
            payload: background
        })
    };

    const headers = {header: 'Tomoya Kuroda', subheader: 'Junior Developer'};
    const updateHeaders = (headers) => {
        dispatch({
            type: UPDATE_HEADERS,
            payload: headers
        })
    };

    useEffect(() => {
        updateBackground(background);
        updateHeaders(headers)
    });
    return (
        <HeroContext.Provider
            value={{
                background: state.background,
                headers: state.headers
            }}>
            <Layout>
                <SEO title="Home"/>
                <Segment style={{padding: '8em 0em'}} vertical>
                    <Grid container stackable verticalAlign='middle'>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Header as='h3' style={{fontSize: '2em'}}>
                                    Nice to meet you!
                                </Header>
                                <p style={{fontSize: '1.33em'}}>
                                    Hello! I'm Tomoya. I have studied programming at Georgian College in Barrie,
                                    Ontario
                                    since 2017.

                                </p>
                                <Header as='h3' style={{fontSize: '2em'}}>
                                    Game, Mountaineering, and Learning!
                                </Header>
                                <p style={{fontSize: '1.33em'}}>
                                    I enjoy playing strategy games such as <a href="https://civilization.com">Civilization</a>. Also I love to climb mountain and take beautiful pictures.
                                    Moreover, I like to learn skills actively.
                                </p>
                            </Grid.Column>
                            <Grid.Column floated='right' width={6}>
                                <Image bordered rounded size='large' src={profileImage}/>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column textAlign='center'>
                                <Link to="/page-2/"><Button size='huge'>Check My Profile</Button></Link>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </Layout>
        </HeroContext.Provider>
    )
};


export default IndexPage