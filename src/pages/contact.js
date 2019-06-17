import React, {useEffect, useReducer} from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import background from '../images/email.jpg'
import useHero from "../hooks/useHero";

const ContactPage = () => {


    const {updateBackground, updateHeader,updateSubheader,updatePage} = useHero()

    useEffect(() => {
        updateBackground(background);
        updateHeader('')
        updateSubheader('')
        updatePage('/contact/')
    },);
    return (
            <Layout>
                <SEO title="Contact"/>
            </Layout>
    )
};


export default ContactPage