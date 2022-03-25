import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
import { Layout } from "./layout";
import Image from "next/image";

export default function GameInfo({props, cookie}: any) {
  const { user, error, isLoading } = useUser();
  const gamesJson: any = JSON.parse(props.game);

  return <Layout cookie={cookie}>
    <div className="container">
    <div className="row">
          <div className="col-sm-6" style={{ maxWidth: "18rem" }}>
            <div className="card">
              {/* {gamesJson.cover?.url ? <Image src={gamesJson.cover.url} height="18rem" width="18rem" alt="" className="card-img-top" />:<img src="..." style={{ maxHeight: "18rem" }} className="card-img-top" />} */}
              <div className="card-body">
              <h5 className="card-title" >{gamesJson.name}</h5>
              <h6 className="card-text" >{gamesJson.price} $</h6>
              </div>
            </div>
        </div>
        {/* <Link href={`/api/panier/add/${gamesJson._id}?info=${user?.email}`}><a>Add To Basket</a></Link> */}
    </div>
    </div>
  </Layout>
}
