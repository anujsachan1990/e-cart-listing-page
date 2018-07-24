import FilterStyle from "./Filters.style";
import withStyle from "../../../global/withStyle";
import SelectBox from "../../atoms/SelectBox";
import config from "../../../global/config";
import locale from "../../../global/lang";

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
export default withStyle(Filters, FilterStyle);
