import React from 'react'

import Layout from '../components/Layout'
import BlogRollOtherPosts from '../components/BlogRollOtherPosts'

export default class CataloguePage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRollOtherPosts />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
