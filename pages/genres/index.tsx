import { GetServerSideProps } from "next";
import { Layout } from "../../components/layout";


function Genre(props: { cookie: string }) {
  return (
    <Layout cookie={props.cookie}>
      <div>
        <h1>Coucou Genre !</h1>
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

export default Genre


// export const getServerSideProps: GetServerSideProps = async (context) => {
//   if (context.req.cookies.appSession === undefined) {
//     return {
//       props: {},
//     }
//   }
//   return {
//     props : { cookie: context.req.cookies.appSession },
//   }
// }

// export default Genre
