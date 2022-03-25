import { GetServerSideProps } from "next";
import Link from "next/link";
import GameInfo from "../../../components/GameInfo";
import { Layout } from "../../../components/layout";
import { getDatabase } from "../../../src/utils/database";


export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const mongodb = await getDatabase();
  const games = await mongodb.collection("games").findOne({"name" : `${context.params.game}`});
  const gamesString = JSON.stringify(games);

  return {
    props: {
      game: gamesString,
    }
  };
}

export default function Game({game, cookie}: any) {
  return (
    <Layout cookie={cookie}>
      <GameInfo game={game} />
    </Layout>

  )

}