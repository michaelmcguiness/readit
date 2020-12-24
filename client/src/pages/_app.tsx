import { AppProps } from 'next/app'
import Axios from 'axios'
import { useRouter } from 'next/router'

import '../styles/tailwind.css'

import Navbar from '../components/Navbar'

Axios.defaults.baseURL = 'http://localhost:5000/api'
Axios.defaults.withCredentials = true

function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter()
  const authroutes = ['/register', '/login']
  const authRoute = authroutes.includes(pathname)
  return (
    <>
      {!authRoute && <Navbar />}
      <Component {...pageProps} />
    </>
  )
}

export default App
