 /**
 * File name: about.js
 * Author's name: Tomoya 
 * Web site name: Tomoya Kuroda
 * File description: about me page
 */

import React, {useEffect} from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Card, Container, Image} from "semantic-ui-react";
import background from '../images/barrie_snow.jpg'
import profileImage from '../images/profile2.jpg'

import useHero from "../hooks/useHero";

const AboutPage = () => {

    const {updateBackground, updateHeader,updateSubheader,updatePage} = useHero()

    // update context
    useEffect(() => {
        updateBackground(background)
        updateHeader('I develop to change the world and make it a better place')
        updateSubheader('Tomoya Kuroda')
        updatePage('/about/')
    },);

    return (
            <Layout>
                <SEO title="About Me"/>
                <Container style={{padding: '2em 0em'}}>
                    <Card.Group centered>
                            <Card>
                                <Image src={profileImage} wrapped ui={false} />
                                <Card.Content>
                                    <Card.Header>Tomoya Kuroda</Card.Header>
                                    <Card.Meta>
                                        <span className='date'>Started living in Canada since Aug 2017</span>
                                    </Card.Meta>
                                    <Card.Description>
                                        I am a software developer.
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
