import productStyle from "./Product.style";
import withStyle from "../../../global/withStyle";
import Image from "../../atoms/Image";
import Tag from "../../atoms/Tag";
import locale from "../../../global/lang";
import config from "../../../global/config";

const Product = props => {
  const { item, className } = props;
  return (
    <li className={className}>
      <Image
        src={config.staticPath + item.productImage}
        alt={item.productName + "image"}
      />
      <div>
        {item.isExclusive && (
          <Tag className="exclusive-tag" tagLabel={locale.exclusive} />
        )}
        {item.isSale && <Tag className="sale-tag" tagLabel={locale.sale} />}
        <div className="product-description">
          <div className="product-name">{item.productName}</div>
          <div className="product-price">{item.price}</div>
        </div>
      </div>
    </li>
  );
};
export default withStyle(Product, productStyle);
