import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false, showMoreText: false }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  handleClickMore = () => {
    this.setState({ showMoreText: true })
  }

  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Connect</h1>
              <a href="mailto:info@titanic.nu">info@titantic.nu</a>
              {!this.state.showMoreText && (
                <div>
                  <button onClick={this.handleClickMore}>more...</button>
                </div>
              )}
              {this.state.showMoreText && (
                <p>
                  Ay Ay, there is no Captain. All actions on bridge deck are
                  taken by affirmative consensus. Titanic is about the
                  despicable desire to fill the void. Everyone is important and
                  nobody is important. Titanic is a refuge for cultures and
                  anti-cultures. Titanic makes no difference between fashion and
                  fermentation, paraphernalia and painting, scavenging and
                  sculpture, politics and pictorial composition. A work of art
                  is worth nothing and all art is priceless. On the journey
                  towards annihilation we are committed to program mayhem. All
                  our actions take us closer to havoc. We accept this as our
                  destiny.
                </p>
              )}
              {/* <form
                name="connect"
                method="post"
                action="/connect/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                <input type="hidden" name="form-name" value="connect" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'name'}>
                    Your name
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'name'}
                      onChange={this.handleChange}
                      id={'name'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'email'}>
                    Email
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'email'}
                      name={'email'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'message'}>
                    Message
                  </label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name={'message'}
                      onChange={this.handleChange}
                      id={'message'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <button className="button is-link" type="submit">
                    Send
                  </button>
                </div>
              </form> */}
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
