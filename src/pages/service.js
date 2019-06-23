 /**
 * File name: service.js
 * Author's name: Tomoya 
 * Web site name: Tomoya Kuroda
 * File description: service page
 */

import React, { useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {  Container,  Statistic,  Header } from "semantic-ui-react"

import background from "../images/service.jpg"
import useHero from "../hooks/useHero"

const ServicePage = () => {
  const {
    updateBackground,
    updateHeader,
    updateSubheader,
    updatePage,
  } = useHero()

      // update context
  useEffect(() => {
    updateBackground(background)
    updateHeader("I like to learn new skills and apply them")
    updateSubheader("")
    updatePage("/service/")
  })

  return (
    <Layout>
      <SEO title="Services" />
      <Container  style={{padding: '4em 0em'}}>
        <Header as='h1' textAlign='center'>I can offer following services</Header>
        <Statistic.Group widths="two" style={{padding: '4em 0em'}}>
          <Statistic>
            <Statistic.Value text>Building API <br/>with Spring Boot and Node.js</Statistic.Value>
          </Statistic>
          <Statistic>
            <Statistic.Value text>Building a frontend <br/>with React</Statistic.Value>
          </Statistic>
        </Statistic.Group>
      </Container>
    </Layout>
  )
}

export default ServicePage
