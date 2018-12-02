import React, { Component } from 'react'
import Transition from 'react-transition-group/Transition'

import Layout from '../components/Layout'
import TopNav from '../components/TopNav'

class AboutPage extends Component {
  state = {
    in: false
  }

  componentDidMount() {
    this.setState({ in: true })
  }

  render() {
    return (
      <Layout>
        <Transition in={this.state.in} timeout={100}>
          {state => (
            <div style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}>
              <TopNav />
              <div style={styles.container}>
                <h1>Contact</h1>
                <div class="textContainer">
                </div>
              </div>
            </div>
          )}
        </Transition>
      </Layout>
    )
  }
}

const defaultStyle = {
  transition: `opacity 500ms`,
  opacity: 0,
  padding: 20
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: {},
  exited: {}
}

const styles = {
  container: {
    textAlign: 'center'
  }
}

export default AboutPage
