import {graphql, Link, StaticQuery} from "gatsby"
import React, {useContext} from "react"
import {Menu} from "semantic-ui-react";
import context from "../contexts/context";


const HeaderMenu = (props) => {
    const menuContext = useContext(context)
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
                    <Menu.Item active={menuContext.page==='/'}><Link to="/">Home</Link></Menu.Item>
                    <Menu.Item active={menuContext.page==='/about/'}><Link to="/about/">About Me</Link></Menu.Item>
                    <Menu.Item>Projects page</Menu.Item>
                    <Menu.Item>Services page</Menu.Item>
                    <Menu.Item>Contact Me</Menu.Item>
                </>)}
        />
    );
}

export default HeaderMenu
