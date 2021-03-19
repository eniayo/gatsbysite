import React from 'react'
import { Link } from 'gatsby'

import Layout from "../components/layout"


const IndexPage = () => {
  return (
    <Layout>
        <h1>Hello Eniayo</h1>
        <h2>I'm Eniayo, a full-stack developer living in the beautiful city of Lagossss</h2>
        <p>Need a developer? <Link to="/contact">Contact me</Link></p>
        <p>Need a developer? <Link to="/contact">Contact me</Link></p>
        <p>Need a developer? <a href="https://twitter.com/@eniayo_a">@eniayo_a</a></p>
    </Layout>
  )
}

export default IndexPage
