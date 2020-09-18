import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.videoRef = React.createRef()
  }

  componentDidMount() {
    this.videoRef.current.playbackRate = 0.1
  }

  render() {
    return (
      <Layout>
        <section className="section">
          <video
            ref=""
            className="video-image-container"
            playsInline
            autoPlay
            muted
            loop
            poster="ocean.png"
            id="bgvid"
            ref={this.videoRef}
          >
            {/* <source src="polina.webm" type="video/webm" /> */}
            <source src="/img/ocean.mp4" type="video/mp4" />
          </video>
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
