/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import {
    Container,
    Divider,
    Dropdown,
    Grid,
    Image,
    List,
    Menu,
    Segment,
} from 'semantic-ui-react'
import Header from "./header"

// import "./layout.css"
import logo from '../images/logo.png'

const LayoutComponent = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
<>
<Header/>

    <Container text style={{ marginTop: '7em' }}>
            <main>{children}</main>
        {/*<>*/}
        {/*  <Header siteTitle={data.site.siteMetadata.title} />*/}
        {/*  <div*/}
        {/*    style={{*/}
        {/*      margin: `0 auto`,*/}
        {/*      maxWidth: 960,*/}
        {/*      padding: `0px 1.0875rem 1.45rem`,*/}
        {/*      paddingTop: 0,*/}
        {/*    }}*/}
        {/*  >*/}
        {/*    <main>{children}</main>*/}
        {/*    <footer>*/}
        {/*      © {new Date().getFullYear()}, Built with*/}
        {/*      {` `}*/}
        {/*      <a href="https://www.gatsbyjs.org">Gatsby</a>*/}
        {/*    </footer>*/}
        {/*  </div>*/}
        {/*</>*/}
    </Container>


        </>


    )}
  />
)

LayoutComponent.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutComponent
