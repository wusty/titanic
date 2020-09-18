import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          // style={{
          //   backgroundImage: `url('/img/blog-index.jpg')`,
          // }}
        >
          <video
            className="video-image-container"
            playsInline
            autoPlay
            muted
            loop
            poster="ocean.png"
            id="bgvid"
          >
            {/* <source src="polina.webm" type="video/webm" /> */}
            <source src="/img/ocean.mp4" type="video/mp4" />
          </video>
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: '0.5rem 0 0 #6581aa, -0.5rem 0 0 #6581aa',
              backgroundColor: '#6581aa',
              color: 'white',
              padding: '1rem',
              position: 'absolute',
            }}
          >
            Latest Stories
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
