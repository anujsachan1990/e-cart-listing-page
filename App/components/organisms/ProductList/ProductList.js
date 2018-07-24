import Product from "../../molecules/Product";
import ProductListElement from "./ProductList.style";
import withStyle from "../../../global/withStyle";

/** 
  * @desc ProductList component can be used to display a listy of Products. This component is connected with Styled component
  *  to add inline styles.
  *  @items : items object contains array of object of prices, productNames and productType
*/

const ProductList = props => {
  const { items, className } = props;
  return (
    <ProductListElement className={className}>
      {items.map(item => <Product item={item} key={item.index} />)}
    </ProductListElement>
  );
};

export default ProductList;
