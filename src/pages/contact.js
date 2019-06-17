import React, {useEffect, useReducer} from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import background from '../images/email.jpg'
import useHero from "../hooks/useHero";

const ContactPage = () => {


    const {updateBackground, updateHeaders,updatePage} = useHero()
    const headers = {header: '', subheader: ''};

    useEffect(() => {
        updateBackground(background);
        updateHeaders(headers)
        updatePage('/contact/')
    },);
    return (
            <Layout>
                <SEO title="Contact"/>
            </Layout>
    )
};


export default ContactPage