import React from 'react';
import Image from 'next/image'
import { useUser } from '@auth0/nextjs-auth0';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { Layout } from '../components/layout';
import { propTypes } from 'react-bootstrap/esm/Image';


export default withPageAuthRequired(({ user, cookie }: any) => (
    <Layout cookie={cookie}>
      <h1>Profile</h1>
      <h4>Profile</h4>
      <pre data-testid="profile">{JSON.stringify(user, null, 2)}</pre>
    </Layout>
  ));

export const getServerSideProps = withPageAuthRequired();
