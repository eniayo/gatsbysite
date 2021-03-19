import React from 'react'

import Layout from '../components/layout'
import blogStyles from './blog.module.css'

const BlogPage = () => {
    return (
      <Layout>
        <h1>Blog</h1>
        <ol className={blogStyles.posts}>
        <p>Posts will show up here later on </p>
        </ol>
      </Layout>
    )
}

export default BlogPage