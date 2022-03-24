import { GetServerSideProps } from "next";
import Link from "next/link";
import Image from "next/image";
import { Layout } from "../components/layout";
import { getDatabase } from "../src/utils/database"
import { MongoClient } from "mongodb";

type Game = {
  name: string,
  summary: string,
  cover: {
    url: string,
  }
}

export const getServerSideProps: GetServerSideProps = async () =>{
  const mongodb = await getDatabase();

  const games = await mongodb.collection("games").find().toArray();
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
          <Link href={`/game/${game.name}`} passHref={true} key={index}>
          <div  className="col-sm-6" style={{ maxWidth: "18rem" }}>
            <div className="card">
              {/* {game?.cover?.url ? <Image src={game.cover.url} alt="" height="18rem" width="18rem" className="card-img-top" />:<Image src="..." alt="" height="18rem" width="18rem" className="card-img-top" />} */}
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
