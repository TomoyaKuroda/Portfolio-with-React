import React, { useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {  Container, Item } from "semantic-ui-react"
import background from "../images/project.jpg"
import project1 from '../images/assist-on.png'
import useHero from "../hooks/useHero"

const ProjectPage = () => {
  const {
    updateBackground,
    updateHeader,
    updateSubheader,
    updatePage,
  } = useHero()

  useEffect(() => {
    updateBackground(background)
    updateHeader("I feel happy when I satisfy clients")
    updateSubheader("")
    updatePage("/project/")
  })

  return (
    <Layout>
      <SEO title="Projects" />
      <Container style={{padding: '8em 0em'}}>
        <Item.Group>
          <Item>
            <Item.Image size="medium" src={project1} />
            <Item.Content>
              <Item.Header as="a">WordPress</Item.Header>
              <Item.Description>
                <p>
                We developed a WordPress website for a study abroad agency. I received HTML and CSS from a web designer, and I converted them into WordPress theme with adding JavaScript. <a href="http://assiston-toronto.com">Here</a> is the live link. 
                </p>
              </Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Container>
    </Layout>
  )
}

export default ProjectPage
