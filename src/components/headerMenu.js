import {graphql, Link, StaticQuery} from "gatsby"
import React, {useContext} from "react"
import {Menu} from "semantic-ui-react";
import {Context} from "../contexts/context";
import useHero from "../hooks/useHero";


const HeaderMenu = (props) => {
  const [state,setState] = useContext(Context)
  const {background, headers,page} = useHero()

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
                    <Menu.Item active={page==='/'}>Home</Menu.Item>
                </Link>
                    <Link to="/about/">
                    <Menu.Item active={page==='/about/'}>About Me</Menu.Item>
                    </Link>
                    <Link to="/project/">
                    <Menu.Item active={page==='/project/'}>Projects page</Menu.Item>
                    </Link>
                    <Link to="/service/">
                    <Menu.Item active={page==='/service/'}>Services page</Menu.Item>
                    </Link>
                    <Link to="/contact/">
                    <Menu.Item active={page==='/contact/'}>Contact Me</Menu.Item>
                    </Link>
                </>)}
        />
    );
}

export default HeaderMenu
