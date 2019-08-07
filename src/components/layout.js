/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import SEO from "./seo"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <SEO title="Home" />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `30px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <Header siteTitle={data.site.siteMetadata.title} />
        <main style={{
          padding: `4rem 0`,
        }}>
          {children}
        </main>
        <footer>
          © {new Date().getFullYear()}, Built by
          {` `}
          <a href="https://ryanvanbelkum.me">;)</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
