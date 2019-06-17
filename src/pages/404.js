import React, { useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import background from '../images/404.jpg'
import useHero from "../hooks/useHero";
const NotFoundPage = () => {

  const {updateBackground, updateHeader,updateSubheader,updatePage} = useHero()

    useEffect(() => {
        updateBackground(background);
        updateHeader('NOT FOUND')
        updateSubheader("You just hit a route that doesn't exist... the sadness.")
        updatePage('/404/')
    },);
return (
  <Layout>
    <SEO title="404: Not found" />
  </Layout>
)
}

export default NotFoundPage
