import { createGlobalStyle } from 'styled-components'
import '../styles/globals.css'

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }

  html {
    background: #1e1f2b;
    color: #e8edf0;
  }

  html, body {
    height: 100%;
  }

  #__next {
    display: flex;
    flex-direction: row;
    height:100%;
  }
`


function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
