import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app'
import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';
import { GetServerSideProps } from 'next';
import { Layout } from '../components/layout';
import { propTypes } from 'react-bootstrap/esm/Image';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <UserProvider>
        <Component {...pageProps} />
    </UserProvider>
  )
}

export default MyApp
