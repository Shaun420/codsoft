/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
//import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

// Icons
import { MdOutlineFavorite } from "react-icons/md";
import { PiCoffeeFill } from "react-icons/pi";

const siteMetadata = require("../config/site-config.js");

const Layout = ({ children }) => {
  return (
    <>
      <Header siteTitle={siteMetadata?.title || `Title`} />
      <div className="text-white"
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
          
          <p className="text-lg">
            &copy; {new Date().getFullYear()} &middot; Made by Shaunak with
            <MdOutlineFavorite className="inline-block mx-1 text-xl text-violet-700" /> and 
            <PiCoffeeFill className="inline-block mx-1 text-xl text-violet-700" />
          </p>
        </footer>
      </div>
    </>
  )
}

export default Layout
