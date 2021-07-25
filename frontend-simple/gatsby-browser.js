/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */
import React from "react"
// You can delete this file if you're not using it
import "./src/styles/global.css"
import { GlobalProvider } from "./src/context/GlobalContext"

export default ({ element }) => <GlobalProvider>{element}</GlobalProvider>
