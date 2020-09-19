import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRollOtherPosts'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll isStartPage={false} />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
