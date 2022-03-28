import { GetServerSideProps } from "next";
import { Layout } from "../../components/layout";
import { getDatabase } from "../../src/utils/database";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const mongodb = await getDatabase();
  const data = await mongodb

    .collection("games")
    .find({ "platform.name": `${context.params.GamesByPlatform}` })
    .toArray();
  const datastring = JSON.stringify(data);

  return {
    props: {
      data: datastring,
    },
  };
};

export default function GameByPlatform({ data,cookie }: any) {
  const gamesByPlatform = JSON.parse(data);
  const router = useRouter();
  const query = router.query.GamesByPlatform;
  return (
    <Layout cookie={cookie}>
      <div className="container">
        <div className="row">
          {gamesByPlatform.map((element: any, index: any) => {
            return (
              <Link passHref={true} key={index} href={`/platforms/${query}/${element.name}`}>
                <div
                  key={index}
                  className="col-sm-8"
                  style={{ maxWidth: "18rem" }}
                >
                  <div className="card">
                    {element.cover?.url ? (
                      <Image
                        alt="game"
                        src={`http:${element.cover.url}`}
                        height={250}
                        width="50%"
                        className="card-img-top"
                      />
                    ) : (
                      <Image
                      className="img"
                      src="..."
                      height={250}
                        width="50%"
                      alt="temporary"
                    />
                    )}
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
