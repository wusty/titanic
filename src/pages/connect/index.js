import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import globe from '../../img/titanic-globe.gif'
import instagram from '../../img/social/instagram.svg'
import mailIcon from '../../img/email-icon.svg'

import VideoBackground from '../../components/VideoBackground'

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
        <VideoBackground />
        <section className="section">
          <div className="container">
            <div className="content">
              <div
                className="columns is-mobile"
                style={{
                  marginTop: '40px',
                  display: 'flex',
                  justifyContent: 'space-around',
                }}
              >
                <a
                  className="align-self-center email-icon fa fa-mail"
                  href="mailto:info@titanic.nu"
                >
                  <img src={mailIcon} width="64" alt="email"></img>
                </a>

                {!this.state.showMoreText && (
                  <div className="align-self-center ">
                    <input
                      type="image"
                      style={{ marginTop: '40px' }}
                      src={globe}
                      onClick={this.handleClickMore}
                    ></input>
                  </div>
                )}
                <a
                  className="align-self-center instagram-icon"
                  target="_blank"
                  title="instagram"
                  href="https://instagram.com/titanic4u"
                >
                  <img
                    style={{ marginTop: '40px' }}
                    width="64"
                    src={instagram}
                    alt="Instagram"
                    style={{ verticalAlign: 'bottom' }}
                  />
                  {/* <span>@titanic4u</span> */}
                </a>
              </div>
              <div className="columns is-mobile">
                <div className="column">
                  {this.state.showMoreText && (
                    <>
                      <p
                        style={{
                          backgroundColor: 'white',
                          // position: 'absolute',
                          // left: '45%',
                          padding: '2rem',
                        }}
                      >
                        Ay Ay, there is no Captain. All actions on bridge deck
                        are taken by affirmative consensus. Titanic is about the
                        despicable desire to fill the void. Everyone is
                        important and nobody is important. Titanic is a refuge
                        for cultures and anti-cultures. Titanic makes no
                        difference between fashion and fermentation,
                        paraphernalia and painting, scavenging and sculpture,
                        politics and pictorial composition. A work of art is
                        worth nothing and all art is priceless. On the journey
                        towards annihilation we are committed to program mayhem.
                        All our actions take us closer to havoc. We accept this
                        as our destiny.
                      </p>
                    </>
                  )}
                </div>
              </div>
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
