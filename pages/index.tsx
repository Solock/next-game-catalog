import { Layout } from '../components/layout'
import { GetServerSideProps } from "next";
// import { getDatabase } from "../src/utils/database"

export default function Home(props: { cookie: string }) {
  return (
    <Layout cookie={props.cookie}>
      <div>
        <main className="text-center">
          <h1>Coucou</h1>
          <h2>Le site est encore en correction !</h2> <br />
          <h2>Bonne visite !</h2>
        </main>
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


// export const getServerSideProps: GetServerSideProps = async () => {
//   const mongodb = await getDatabase();

//   const games = await mongodb.db().collection("games").find().toArray();
//   console.log(games);


//   return {
//     props: {
//       games: games
//     }
//   };
// }
