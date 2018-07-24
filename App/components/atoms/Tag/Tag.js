import withStyle from "../../../global/withStyle";

const Tag = props => {
  const { tagLabel, className } = props;
  return <div className={className}>{tagLabel}</div>;
};
export default withStyle(Tag);
