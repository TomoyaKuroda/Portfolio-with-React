import PropTypes from "prop-types"
import React, { useState } from "react"
import MobileDetect from "mobile-detect"

import {
  Container,
  Header,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from "semantic-ui-react"
import Footer from "./footer"
import HeaderMenu from "./headerMenu"
import EmailForm from "./emailForm"
import useHero from "../hooks/useHero"
// responsive design
const getWidth = () => {
  const isSSR = typeof window === "undefined"
  return isSSR ? Responsive.onlyMobile.maxWidth : window.innerWidth
}

// hero part
const HomepageHeading = ({ mobile }) => {
  const { header, subheader, page } = useHero()
  return (
    <Container text>
      {page !== "/contact/" && (
        <>
          <Header
            as="h1"
            content={header}
            inverted
            style={{
              fontSize: mobile ? "2em" : "4em",
              fontWeight: "normal",
              marginBottom: 0,
              marginTop: mobile ? "1.5em" : "3em",
            }}
          />
          <Header
            as="h2"
            content={subheader}
            inverted
            style={{
              fontSize: mobile ? "1.5em" : "1.7em",
              fontWeight: "normal",
              marginTop: mobile ? "0.5em" : "1.5em",
            }}
          />
        </>
      )}
      {page === "/contact/" && (
        <>
          <h1
            style={{
              fontSize: mobile ? "1.4em" : "2.8em",
              fontWeight: "normal",
              marginBottom: 0,
              marginTop: mobile ? "0.7em" : "1.4em",
            }}
          >
            Contact Form
          </h1>
          <EmailForm />
        </>
      )}
    </Container>
  )
}
HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

// container for desktop
const DesktopContainer = props => {
  const [fixed, setFixed] = useState(false)
  const hideFixedMenu = () => setFixed(false)
  const showFixedMenu = () => setFixed(true)
  const { children } = props
  const { background } = useHero()

  return (
    <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
      <Visibility
        once={false}
        onBottomPassed={showFixedMenu}
        onBottomPassedReverse={hideFixedMenu}
      >
        <Segment
          inverted
          textAlign="center"
          style={{
            minHeight: 800,
            padding: "1em 0em",
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
          }}
          vertical
        >
          <Menu
            fixed={fixed ? "top" : null}
            inverted={!fixed}
            pointing={!fixed}
            secondary={!fixed}
            size="large"
            style={{ borderBottom: "initial", borderTop: "initial" }}
          >
            <Container>
              <HeaderMenu />
            </Container>
          </Menu>
          <HomepageHeading />
        </Segment>
      </Visibility>
      {children}
    </Responsive>
  )
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

// container for mobile
const MobileContainer = props => {
  const [sidebarOpened, setSidebarOpened] = useState(false)
  const handleSidebarHide = () => setSidebarOpened(false)
  const handleToggle = () => setSidebarOpened(true)
  const { children } = props
  const { background } = useHero()

  return (
    <Responsive
      as={Sidebar.Pushable}
      getWidth={getWidth}
      maxWidth={Responsive.onlyMobile.maxWidth}
    >
      <Sidebar
        as={Menu}
        animation="push"
        inverted
        onHide={handleSidebarHide}
        vertical
        visible={sidebarOpened}
      >
        <HeaderMenu />
      </Sidebar>

      <Sidebar.Pusher dimmed={sidebarOpened}>
        <Segment
          inverted
          textAlign="center"
          style={{
            minHeight: 350,
            padding: "1em 0em",
            backgroundImage: `url(${background})`,
            objectFit: "cover",
            backgroundSize: '100% 100%'
          }}
          vertical
        >
          <Container>
            <Menu inverted pointing secondary size="large">
              <Menu.Item onClick={handleToggle}>
                <Icon name="sidebar" />
              </Menu.Item>
            </Menu>
          </Container>
          <HomepageHeading mobile />
        </Segment>

        {children}
      </Sidebar.Pusher>
    </Responsive>
  )
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = ({ children }) => {
  const { header } = useHero()
  // prefent getting undefined from context
  if (header === undefined) return <div></div>
  else
    return (
      <ResponsiveContainer>
        {children}
        <Footer />
      </ResponsiveContainer>
    )
}
// responsive design
HomepageLayout.getInitialProps = async ({ req }) => {
  const md = new MobileDetect(req.headers["user-agent"])
  const isMobileFromSSR = !!md.mobile()
  return {
    isMobileFromSSR,
    deviceInfo: {
      mobile: md.mobile(),
      tablet: md.tablet(),
      os: md.os(),
      userAgent: md.userAgent(),
    },
  }
}

export default HomepageLayout
