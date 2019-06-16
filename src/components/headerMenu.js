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
                <><Link to="/">
                    <Menu.Item as='a' header>
                        {data.site.siteMetadata.title}
                    </Menu.Item>
                </Link>
                <Link to="/">
                    <Menu.Item active={menuContext.page==='/'}>Home</Menu.Item>
                </Link>
                    <Link to="/about/">
                    <Menu.Item active={menuContext.page==='/about/'}>About Me</Menu.Item>
                    </Link>
                    <Link to="/about/">
                    <Menu.Item>Projects page</Menu.Item>
                    </Link>
                    <Menu.Item>Services page</Menu.Item>
                    <Link to="/contact/">
                    <Menu.Item>Contact Me</Menu.Item>
                    </Link>
                </>)}
        />
    );
}

export default HeaderMenu
