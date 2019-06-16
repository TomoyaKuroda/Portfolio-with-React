import PropTypes from 'prop-types'
import React, {Component, useContext, useState} from 'react'
import MobileDetect from "mobile-detect";

import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
} from 'semantic-ui-react'
import Footer from "./footer";
import context from "../contexts/context";
import HeaderMenu from "./headerMenu";
import {Link} from "gatsby";
// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
    const isSSR = typeof window === 'undefined'
    return isSSR ? Responsive.onlyMobile.maxWidth : window.innerWidth
}



/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => {
    const headingContext = useContext(context)
    const handleSubmit =(event)=> {
        event.preventDefault();
    }
return    (
        <Container text>
            {headingContext.page!=='/contact/' &&  (
                <>
                <Header
                    as='h1'
                    content={headingContext.headers.header}
                    inverted
                    style={{
                        fontSize: mobile ? '2em' : '4em',
                        fontWeight: 'normal',
                        marginBottom: 0,
                        marginTop: mobile ? '1.5em' : '3em',
                    }}
                />
                <Header
                as='h2'
                content={headingContext.headers.subheader}
                inverted
                style={{
                fontSize: mobile ? '1.5em' : '1.7em',
                fontWeight: 'normal',
                marginTop: mobile ? '0.5em' : '1.5em',
            }}
                />
                </>
                )}
            {headingContext.page==='/contact/' &&  (
                <>
            <h1 style={{
                fontSize: mobile ? '1.5em' : '3em',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: mobile ? '0.8em' : '1.6em',
            }}>Contact Form</h1>
            <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                className={'ui form'}
                onSubmit={handleSubmit}
            >
                <input type="hidden" name="form-name" value="contact"/>
                <input type="hidden" name="bot-field"/>

                <div className="form-group" style={{marginTop: mobile ? '0.2em' : '0.4em',}}>
                    <label style={{fontSize: mobile ? '1em' : '1.2em'}}>Your Name<abbr title="required">*</abbr>
                        <input type="text" className="form-control" id="name" name="name" placeholder=""
                               maxLength="30" minLength="2" required autoComplete="name"/>
                    </label>
                </div>
                <div className="form-group" style={{marginTop: mobile ? '0.2em' : '0.4em',}}>
                    <label style={{fontSize: mobile ? '1em' : '1.2em'}}>Your Email<abbr title="required">*</abbr>
                        <input type="email" className="form-control" id="email" name="email" placeholder=""
                               pattern="^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
                               required autoComplete="email"/>
                    </label>
                </div>
                <div className="form-group" style={{marginTop: mobile ? '0.2em' : '0.4em',}}>
                    <label style={{fontSize: mobile ? '1em' : '1.2em'}}>Message<abbr title="required">*</abbr>
                        <textarea className="form-control" id="contact" name="content" rows="8" required></textarea>
                    </label>
                </div>

                <div className="form-group" style={{marginTop: mobile ? '0.2em' : '0.4em',}}>
                    <Button type="submit" primary size={'big'}>Submit</Button>
                </div>
            </form>
            </>
                )}
        </Container>
    )
}
HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
const DesktopContainer = (props) => {
    const [fixed, setFixed]=useState(false)
    const hideFixedMenu = () => setFixed(false)
    const showFixedMenu = () => setFixed(true)
    const { children } = props
    const containerContext = useContext(context)
        return (

            <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
                <Visibility
                    once={false}
                    onBottomPassed={showFixedMenu}
                    onBottomPassedReverse={hideFixedMenu}
                >
                    <Segment
                        inverted
                        textAlign='center'
                        style={{ minHeight: 800, padding: '1em 0em' ,backgroundImage: `url(${containerContext.background})`, backgroundSize: 'cover'}}
                        vertical
                    >
                        <Menu
                            fixed={fixed ? 'top' : null}
                            inverted={!fixed}
                            pointing={!fixed}
                            secondary={!fixed}
                            size='large'
                            style={{ borderBottom:'initial' , borderTop:'initial'}}
                        >
                            <Container>
                                <HeaderMenu/>
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

const MobileContainer  = (props) => {
    const [sidebarOpened, setSidebarOpened]=useState(false)
    const handleSidebarHide = () => setSidebarOpened(false)
    const handleToggle = () => setSidebarOpened(true)
    const { children } = props
    const containerContext = useContext(context)

        return (
            <Responsive
                as={Sidebar.Pushable}
                getWidth={getWidth}
                maxWidth={Responsive.onlyMobile.maxWidth}
            >

                <Sidebar
                    as={Menu}
                    animation='push'
                    inverted
                    onHide={handleSidebarHide}
                    vertical
                    visible={sidebarOpened}
                >
                    <HeaderMenu/>
                </Sidebar>

                <Sidebar.Pusher dimmed={sidebarOpened}>
                    <Segment
                        inverted
                        textAlign='center'
                        style={{ minHeight: 350, padding: '1em 0em', backgroundImage: `url(${containerContext.background})`, objectFit: 'cover' }}
                        vertical
                    >
                        <Container>
                            <Menu inverted pointing secondary size='large'>
                                <Menu.Item onClick={handleToggle}>
                                    <Icon name='sidebar' />
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

const HomepageLayout = ({children}) => (
    <ResponsiveContainer>
        {children}
<Footer/>
    </ResponsiveContainer>

)

HomepageLayout.getInitialProps = async ({ req }) => {
    const md = new MobileDetect(req.headers["user-agent"]);
    const isMobileFromSSR = !!md.mobile();
    return {
        isMobileFromSSR,
        deviceInfo: {
            mobile: md.mobile(),
            tablet: md.tablet(),
            os: md.os(),
            userAgent: md.userAgent()
        }
    };
};

export default HomepageLayout
