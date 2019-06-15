import {graphql, Link, StaticQuery} from "gatsby"
import React from "react"
import {Menu} from "semantic-ui-react";
import { globalHistory } from "@reach/router"


const HeaderMenu = (props) => {
    const path = globalHistory.location.pathname
return    (

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
                    <Menu.Item as='a' header>
                        {data.site.siteMetadata.title}
                    </Menu.Item>
                    <Menu.Item active={path==='/'}><Link to="/">Home</Link></Menu.Item>
                    <Menu.Item active={path==='/about/'}><Link to="/about/">About Me</Link></Menu.Item>
                    <Menu.Item>Projects page</Menu.Item>
                    <Menu.Item>Services page</Menu.Item>
                    <Menu.Item>Contact Me</Menu.Item>
                </>)}
        />
    );
}

export default HeaderMenu
