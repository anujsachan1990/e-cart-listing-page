import PropTypes from "prop-types";
import productStyle from "./Product.style";
import withStyle from "../../../global/withStyle";
import Image from "../../atoms/Image";
import Tag from "../../atoms/Tag";
import locale from "../../../global/lang";
import config from "../../../global/config";

/** 
  * @desc Product component can be used to display a Product. This component is connected with Styled component
  *  to add inline styles.
  *  @item : Item object contains information regarding the price, productName, productType
*/

const Product = props => {
  const { item, className } = props;
  return (
    <li className={className}>
      <Image
        src={config.staticPath + item.productImage}
        alt={item.productName}
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

Product.propTypes = {
  item: PropTypes.shape({
    index: PropTypes.number.isRequired,
    isSale: PropTypes.bool.isRequired,
    isExclusive: PropTypes.bool.isRequired,
    price: PropTypes.string.isRequired,
    productImage: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    size: PropTypes.array.isRequired
  }),
  className: PropTypes.string
};

export default withStyle(Product, productStyle);
