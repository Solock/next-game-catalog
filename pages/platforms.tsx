import { GetServerSideProps } from "next";
import Link from "next/link";
import { Layout} from "../components/layout";
import { getDatabase } from "../src/utils/database";
import Image from "next/image";

export const getServerSideProps: GetServerSideProps = async () => {
  const mongodb = await getDatabase();
  const data = await mongodb.collection("games").find().toArray();
  const platforms = data.map((element) => {
    return element.platform;
  });

  const filteredArray = platforms.filter(function (element, index, before) {
    if (index !== 0) {
      if (element.name !== before[index - 1].name) {
        return element;
      }
    }
  });

  const [unique] = [filteredArray.splice(0, 9)];
  return {
    props: {
      platforms: unique,
    },
  };
};

export default function Platforms({ platforms, cookie }: any) {
  return (
    <Layout cookie={cookie}>
      <div className="container">
        <div className="row">
          {platforms.map((element: any, index: number) => {
            return (
              <Link passHref={true} key={index} href={`/platforms/${element.name}`}>
                <div className="col-sm-8" style={{ width: "18rem" }}>
                  <div className="card">
                    {element?.platform_logo_url ? (
                      // <img
                      //   alt=""
                      //   src={element.platform_logo_url}
                      //   style={{ height: "18rem" }}
                      //   className="card-img-top"
                      // />
                      <Image
                        alt=""
                        src={`http:${element.platform_logo_url}`}
                        height={250}
                        width="50%"
                        className="card-img-top"
                      />
                    ) : (
                      // <img
                      //   alt=""
                      //   src="..."
                      //   style={{ height: "18rem" }}
                      //   className="card-img-top"
                      // />
                      <Image
                        alt=""
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
                        height={250}
                        width="50%"
                        className="card-img-top"
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
