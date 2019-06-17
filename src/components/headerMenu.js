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
                    <Link to="/project/">
                    <Menu.Item active={menuContext.page==='/project/'}>Projects page</Menu.Item>
                    </Link>
                    <Link to="/service/">
                    <Menu.Item active={menuContext.page==='/service/'}>Services page</Menu.Item>
                    </Link>
                    <Link to="/contact/">
                    <Menu.Item active={menuContext.page==='/contact/'}>Contact Me</Menu.Item>
                    </Link>
                </>)}
        />
    );
}

export default HeaderMenu
