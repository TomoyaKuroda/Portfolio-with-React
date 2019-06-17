import React from "react"
import {Container, Header, Segment} from "semantic-ui-react";


const Footer = () => (
    <footer>
        <Segment vertical >
            <Container>
                <Header as='h4' textAlign='center'>
                    © {new Date().getFullYear()}, Tomoya Kuroda
                </Header>
            </Container>
        </Segment>
    </footer>
)



export default Footer
