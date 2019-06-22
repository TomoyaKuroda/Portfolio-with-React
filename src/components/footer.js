 /**
 * File name: footer.js
 * Author's name: Tomoya 
 * Web site name: Tomoya Kuroda
 * File description: Footer component
 */

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
