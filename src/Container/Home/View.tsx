
import { useParams } from "react-router-dom";
import imagedata from "./Data";

// const {productId} = useParams();

const View = () => {
  const { productId } = useParams();
  const detail = imagedata.find(({ id }) => id === Number(productId));

  

  return (
    <>
    
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
                <img  src={detail?.image} alt="not found" />
                </div>
                <div className="col-sm-6 productDetail" >
                <div className="card">
              <div className="card-body">
                <h3 className="card-title">{detail?.name}</h3>
                <h3 className="card-title">{detail?.price}</h3>
                <p>{detail?.description}</p>
                <p>{detail?.country}</p>
                <button className="btn btn-primary">Buy</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
