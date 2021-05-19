import { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';

import Header from '../components/Header';

import 'react-toastify/dist/ReactToastify.css';
import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <ToastContainer autoClose={2000} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
