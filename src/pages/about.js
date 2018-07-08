import React, { Component } from 'react'
import Link from 'gatsby-link'
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
              <h1>ABOUT</h1>
              <p>Welcome to page 2</p>
              <Link to="/">Go back to the homepage</Link>
            </div>
          </div>
        )}
      </Transition>
    )
  }
}

const defaultStyle = {
  transition: `opacity 500ms`,
  opacity: 0
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 }
}

const styles = {
  container: {

  }
}

export default AboutPage