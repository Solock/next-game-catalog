import { GetServerSideProps } from "next";
import { Layout } from "../components/layout";
import { getDatabase } from "../src/utils/database";
import Link from "next/link";

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
    // <Layout cookie={cookie}>
    //   <div className="card-body">
    //     <h5 className="card-title">
    //       {genres.map((element: any) => {
    //         return element;
    //       })}
    //     </h5>
    //   </div>
    // </Layout>
    <Layout cookie={cookie}>
      <div className="container">
        <div className="row">
          {genres.map((element: any, index: number) => {
            return (
              <Link passHref={true} key={index} href={`/platforms/${element.name}`}>
                <div className="col-sm-8" style={{ width: "18rem" }}>
                  <div className="card">
                    {/* {element?.platform_logo_url ? (
                    //   <Image
                    //     src={element.platform_logo_url}
                    //     layout="responsive"
                    //     className="card-img-top"
                    //   />
                    // ) : (
                    //   <Image
                    //     src="..."
                    //     height= "18rem"
                    //     width= "18rem"
                    //     className="card-img-top"
                    //   />
                    )} */}
                    <div className="card-body">
                      <h5 className="card-title">{element.name}</h5>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
