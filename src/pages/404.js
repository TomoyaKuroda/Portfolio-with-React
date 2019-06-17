import React, { useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import useHero from "../hooks/useHero";
import background from '../images/barrie_snow.jpg'

const NotFoundPage = () => {

  const {updateBackground, updateHeaders,updatePage} = useHero()
  const headers = {header: 'NOT FOUND', subheader: 'You just hit a route that doesn&#39;t exist... the sadness.'};

  useEffect(() => {
      updateBackground(background);
      updateHeaders(headers)
      updatePage('/404/')
  },);
return (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)
}

export default NotFoundPage
