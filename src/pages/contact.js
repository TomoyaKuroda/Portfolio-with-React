 /**
 * File name: useForm.js
 * Author's name: Tomoya 
 * Web site name: Tomoya Kuroda
 * File description: contact page
 */

import React, {useEffect} from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import background from '../images/email.jpg'
import useHero from "../hooks/useHero";

const ContactPage = () => {
    const {updateBackground, updateHeader,updateSubheader,updatePage} = useHero()
    
    // update context
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