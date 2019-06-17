import React, {useEffect, useReducer} from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {Button, Card, Container, Grid, Header, Icon, Image, Label, Segment} from "semantic-ui-react";
import background from '../images/barrie_snow.jpg'
import profileImage from '../images/profile2.jpg'

import useHero from "../hooks/useHero";

const AboutPage = () => {

    const {updateBackground, updateHeaders,updatePage} = useHero()
    const aboutHeaders = {header: "I develop to change the world and make it a better place.", subheader: 'Tomoya Kuroda'};

    useEffect(() => {
        updateBackground(background)
        updateHeaders(aboutHeaders)
        updatePage('/about/')
    },);

    return (
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
    )
};


export default AboutPage