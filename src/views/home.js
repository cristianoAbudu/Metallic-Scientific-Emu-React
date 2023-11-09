import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Metallic Scientific Emu</title>
        <meta property="og:title" content="Metallic Scientific Emu" />
      </Helmet>
      <div className="home-container1">
        <form
          action="http://localhost:8080/"
          method="POST"
          enctype="text/plain"
          className="home-form"
        >
          <input type="text" placeholder="Nome" className="input" />
          <input
            type="password"
            placeholder="Senha"
            className="home-textinput1 input"
          />
          <button type="button" className="home-button button">
            OK
          </button>
        </form>
      </div>
      <div className="home-container2"></div>
    </div>
  )
}

export default Home
