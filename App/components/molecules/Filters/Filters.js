import PropTypes from "prop-types";
import FilterStyle from "./Filters.style";
import withStyle from "../../../global/withStyle";
import SelectBox from "../../atoms/SelectBox";
import config from "../../../global/config";
import locale from "../../../global/lang";

/** 
  * @desc Filters component can be used to display Filters. This component is connected with Styled component
  *  to add inline styles.
  *  @filterProducts : this function is responsible for setting the filtered value in the product list
*/

const Filters = props => {
  const { filterProducts, className } = props;
  return (
    <div className={className}>
      <h2>{locale.womenTops}</h2>
      <SelectBox
        options={config.productSizes}
        onSelect={selected => filterProducts(selected)}
        className="size-filter"
      />
    </div>
  );
};
Filters.propTypes = {
  filterProducts: PropTypes.func.isRequired,
  className: PropTypes.string
};
export default withStyle(Filters, FilterStyle);
