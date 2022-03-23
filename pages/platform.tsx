import { GetServerSideProps } from "next";
import { Layout } from "../components/layout";


function Platform(props: { cookie: string }) {
  return (
    <Layout cookie={props.cookie}>
      <div>
        <h1>Coucou Platform !</h1>
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (context.req.cookies.appSession === undefined) {
    return {
      props: {},
    }
  }
  return {
    props : { cookie: context.req.cookies.appSession },
  }
}

export default Platform
