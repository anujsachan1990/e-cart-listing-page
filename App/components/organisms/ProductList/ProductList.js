import Product from "../../molecules/Product";
import ProductListElement from "./ProductList.style";
import withStyle from "../../../global/withStyle";

const ProductList = props => {
  const { items, className } = props;
  return (
    <ProductListElement className={className}>
      {items.map(item => <Product item={item} key={item.index} />)}
    </ProductListElement>
  );
};

export default ProductList;
