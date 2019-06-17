import React, { useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {  Container, Item } from "semantic-ui-react"
import background from "../images/service.jpg"
import service1 from '../images/Todo App.png'
import useHero from "../hooks/useHero"

const ServicePage = () => {
  const {
    updateBackground,
    updateHeader,
    updateSubheader,
    updatePage,
  } = useHero()

  useEffect(() => {
    updateBackground(background)
    updateHeader("I like to learn new skills and apply them")
    updateSubheader("")
    updatePage("/service/")
  })

  return (
    <Layout>
      <SEO title="Projects" />
      <Container style={{padding: '8em 0em'}}>
        <Item.Group>
          <Item>
            <Item.Image size="medium" src={service1} />
            <Item.Content>
              <Item.Header as="a">React</Item.Header>
              <Item.Description>
                <p>
                This is my first React application. <a href="https://condescending-mccarthy-88aaab.netlify.com/">Here</a> is the live link.
                </p>
              </Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Container>
    </Layout>
  )
}

export default ServicePage
