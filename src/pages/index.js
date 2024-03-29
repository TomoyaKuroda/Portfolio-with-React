 /**
 * File name: index.js
 * Author's name: Tomoya 
 * Web site name: Tomoya Kuroda
 * File description: index page
 */

import React, {useEffect} from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {Button, Container, Divider, Grid, Header, Image, Segment} from "semantic-ui-react";
import background from '../images/background.jpg'
import profileImage from '../images/profile.jpg'
import useHero from "../hooks/useHero";

const IndexPage = () => {

    const {updateBackground, updateHeader,updateSubheader,updatePage} = useHero()
    
    // update context
    useEffect(() => {
        updateBackground(background)
        updateHeader('Tomoya Kuroda')
        updateSubheader('Software Developer')
        updatePage('/')
    });
    return (
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
                                    I enjoy developing software and learning new tech.
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
                        <Link to="/project/"><Button as='a' size='large'>
                            Check Projects
                        </Button>
                        </Link>
                        <Divider/>

                        <Header as='h3' style={{ fontSize: '2em' }}>
                            I developed some web applications
                        </Header>
                        <p style={{ fontSize: '1.33em' }}>
                            I love to learn new skills, so I studied by myself and created web applications.
                        </p>

                        <Link to="/service/">
                        <Button as='a' size='large'>
                            Check Services
                        </Button>
                        </Link>
                    </Container>
                </Segment>
                <Segment style={{ padding: '0em' }} vertical>
                    <Grid celled='internally' columns='equal' stackable>
                        <Grid.Row textAlign='center'>
                            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                                <Header as='h3' style={{ fontSize: '2em' }}>
                                    Do you want to contact me?
                                </Header>
                                <Link to="/contact/">
                                <Button primary size='huge'>Connect</Button>
                                </Link>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </Layout>
    )
};


export default IndexPage
