/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from "react"
import { ContextProvider } from "./src/contexts/context"
import 'semantic-ui-css/semantic.min.css'

// Context prvider for gatsby
export const wrapRootElement = ({ element }) => (
  <ContextProvider>{element}</ContextProvider>
)
