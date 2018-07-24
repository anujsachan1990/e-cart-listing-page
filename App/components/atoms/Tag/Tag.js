import PropTypes from "prop-types";
import withStyle from "../../../global/withStyle";

/** 
  * @desc Tag component can be used to display Tags labels. This component is connected with Styled component
  *  to add inline styles.
  *  @tagLabel : This prop expect a tagLabel will appear as tag Text. 
*/

const Tag = props => {
  const { tagLabel, className } = props;
  return <div className={className}>{tagLabel}</div>;
};

Tag.propTypes = {
  tagLabel: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default withStyle(Tag);
