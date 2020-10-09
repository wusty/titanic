import React from 'react'

import Layout from '../components/Layout'
import MiscRoll from '../components/MiscRoll'
import VideoBackground from '../components/VideoBackground'

export default class MiscPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <MiscRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
