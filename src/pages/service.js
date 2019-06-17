import React, {useEffect} from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Card, Container, Image} from "semantic-ui-react";
import background from '../images/barrie_snow.jpg'
import profileImage from '../images/profile2.jpg'

import useHero from "../hooks/useHero";

const ServicePage = () => {

    const {updateBackground, updateHeader,updateSubheader,updatePage} = useHero()

    useEffect(() => {
        updateBackground(background)
        updateHeader('I develop to change the world and make it a better place.')
        updateSubheader('Kuroda')
        updatePage('/service/')
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


export default ServicePage