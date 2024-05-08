import Single from "../../components/single/Single";
import { singleProduct } from "../../data";
import "./product.scss";

const Product = () => {
  //fecth or send to single component
  return (
    <div className="product">
      <Single {...singleProduct} />
    </div>
  );
};

export default Product;
