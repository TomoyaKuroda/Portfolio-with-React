import React, {useEffect, useReducer} from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {Button, Container, Divider, Grid, Header, Image, Segment} from "semantic-ui-react";
import background from '../images/background.jpg'
import profileImage from '../images/profile.jpg'
import Context from "../contexts/context";
import heroReducer from "../contexts/reducer";
import {CURRENT_PAGE, UPDATE_BACKGROUND, UPDATE_HEADERS} from "../contexts/types";

const IndexPage = () => {

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

    const headers = {header: 'Tomoya Kuroda', subheader: 'Junior Developer'};
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
        currentPage('/')
    },);
    return (
        <Context.Provider
            value={{
                background: state.background,
                headers: state.headers,
                page:state.page
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
                                <Link to="/about/"><Button size='huge'>Check My Profile</Button></Link>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
                <Segment style={{ padding: '8em 0em' }} vertical>
                    <Container text>
                        <Header as='h3' style={{ fontSize: '2em' }}>
                            I worked on several projects
                        </Header>
                        <p style={{ fontSize: '1.33em' }}>
                            I developed WordPress websites for clients on a team. A designer created HTML and CSS, and I added JavaScript and WordPress functions to the website.
                        </p>
                        <Button as='a' size='large'>
                            Check Projects
                        </Button>

                        <Divider/>

                        <Header as='h3' style={{ fontSize: '2em' }}>
                            I developed some web applications
                        </Header>
                        <p style={{ fontSize: '1.33em' }}>
                            I love to learn new skills, so I studied by myself and created web applications.
                        </p>
                        <Button as='a' size='large'>
                            Check Services
                        </Button>
                    </Container>
                </Segment>
                <Segment style={{ padding: '0em' }} vertical>
                    <Grid celled='internally' columns='equal' stackable>
                        <Grid.Row textAlign='center'>
                            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                                <Header as='h3' style={{ fontSize: '2em' }}>
                                    Do you want to contact me?
                                </Header>
                                <Button primary size='huge'>Connect</Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </Layout>
        </Context.Provider>
    )
};


export default IndexPage