import React, { Component } from 'react'
import Transition from 'react-transition-group/Transition'

import BackHeader from '../components/BackHeader'

class AboutPage extends Component {
  state = {
    in: false
  }

  componentDidMount() {
    this.setState({ in: true })
  }

  render() {
    return (
      <Transition in={this.state.in} timeout={100}>
        {state => (
          <div style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}>
            <BackHeader />
            <div style={styles.container}>
              <h1>My projects</h1>
              <div class="textContainer">
                <p>Check out my projects on <a target="_blank" href="https://github.com/dakingha69">github</a>.</p>
              </div>
            </div>
          </div>
        )}
      </Transition>
    )
  }
}

const defaultStyle = {
  transition: `opacity 500ms`,
  opacity: 0,
  padding: 20,
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 }
}

const styles = {
  container: {
    textAlign: 'center'
  }
}

export default AboutPage
