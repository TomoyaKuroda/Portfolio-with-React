import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {Container, Dropdown, Image, Menu} from "semantic-ui-react";
import logo from "../images/logo.png";

const Header = ({ siteTitle }) => (
    <Menu stackable pointing secondary>
        <Container>
            <Menu.Item as='a' header>
                {/*<Image size='mini' src={logo} style={{ marginRight: '1.5em' }} />*/}
                {siteTitle}
            </Menu.Item>
            <Menu.Item as='a'>Home</Menu.Item>
            <Menu.Item as='a'>About Me</Menu.Item>
            <Menu.Item as='a'>Projects page</Menu.Item>
            <Menu.Item as='a'>Services page</Menu.Item>
            <Menu.Item as='a'>Contact Me</Menu.Item>
        </Container>
    </Menu>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
