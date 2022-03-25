import { GetServerSideProps } from "next";
import { Layout } from "../components/layout";
import { getDatabase } from "../src/utils/database";

export const getServerSideProps: GetServerSideProps = async () => {
  const mongodb = await getDatabase();
  const data = await mongodb.collection("games").find().toArray();
  const genres = data.map((element: any) => {
    return element.genres;
  });

  const oneArray = genres.join().split(",");
  const filter = oneArray.filter((value, index) => {
    return oneArray.indexOf(value) === index;
  });

  return {
    props: {
      genres: filter,
    },
  };
};
export default function Genres({ genres, cookie }: any) {
  return (
    <Layout cookie={cookie}>
      <div className="card-body">
        <h5 className="card-title">
          {genres.map((element: any) => {
            return element;
          })}
        </h5>
      </div>
    </Layout>
  );
}
