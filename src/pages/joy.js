import React from 'react'

import Layout from '../components/Layout'
import JoyRoll from '../components/JoyRoll'

export default class JoyPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <JoyRoll isStartPage={false} />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
