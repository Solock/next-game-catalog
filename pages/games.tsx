import { GetServerSideProps } from "next";
import Link from "next/link";
import { Layout } from "../components/layout";
import { getDatabase } from "../src/utils/database"

type Game = {
  name: string,
  summary: string,
  cover: {
    url: string,
  }
}
export const getServerSideProps: GetServerSideProps = async () =>{
  const mongodb = await getDatabase();

  const games = await mongodb.db().collection("games").find().toArray();
  const gamesString = JSON.stringify(games)

  return {
    props: {
      games: gamesString
    }
  };
}
export default function Games({ games, cookie }: any) {
  const gamesJson = JSON.parse(games);
  return <Layout cookie= {cookie}>
    <div className="container">
    <div className="row">
    {gamesJson.map((game: any, index: any) => {
      return (
          <Link href={`/game/${game.name}`}key={index}>
          <div  className="col-sm-6" style={{ maxWidth: "18rem" }}>
            <div className="card">
              {game?.cover?.url ? <img src={game.cover.url} style={{ maxHeight: "18rem" }} className="card-img-top" />:<img src="..." style={{ maxHeight: "18rem" }} className="card-img-top" />}
              <div className="card-body">
                <h5 className="card-title" >{game.name}</h5>
              </div>
            </div>
          </div>
          </Link>);

    })}

    </div>
    </div>
  </Layout>
}
