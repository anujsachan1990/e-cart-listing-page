import productStyle from "./Product.style";
import withStyle from "../../../global/withStyle";
import Image from "../../atoms/Image";
const Product = props => {
  const { item, className } = props;
  return (
    <li className={className}>
      <Image
        src={"/static/" + item.productImage}
        alt={item.productName + "image"}
      />
      <div>
        {item.isExclusive && <div className="exclusive-tag">Exclusive </div>}
        {item.isSale && <div className="sale-tag"> Sale </div>}
        <div className="product-description">
          <div className="product-name">{item.productName}</div>
          <div className="product-price">{item.price}</div>
        </div>
      </div>
    </li>
  );
};
export default withStyle(Product, productStyle);
