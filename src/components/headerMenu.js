import { Link } from "gatsby"
import React from "react"
import { Menu } from "semantic-ui-react"
import useHero from "../hooks/useHero"

const HeaderMenu = props => {
  const { page } = useHero()

  return (
    <>
      <Link to="/">
        <Menu.Item header>
          Tomoya Kuroda
        </Menu.Item>
      </Link>
      <Link to="/">
        <Menu.Item active={page === "/"}>Home</Menu.Item>
      </Link>
      <Link to="/about/">
        <Menu.Item active={page === "/about/"}>About Me</Menu.Item>
      </Link>
      <Link to="/project/">
        <Menu.Item active={page === "/project/"}>Projects page</Menu.Item>
      </Link>
      <Link to="/service/">
        <Menu.Item active={page === "/service/"}>Services page</Menu.Item>
      </Link>
      <Link to="/contact/">
        <Menu.Item active={page === "/contact/"}>Contact Me</Menu.Item>
      </Link>
    </>
  )
}
export default HeaderMenu
