import withStyle from "../../../global/withStyle";

const Image = ({
  className,
  src,
  placeholderSrc,
  alt,
  inheritedStyles,
  ref,
  ...other
}) => (
  <img
    className={className}
    src={src}
    alt={alt}
    ref={ref}
    {...other}
    onError={event => {
      event.target.src = placeholderSrc;
    }}
  />
);

export default withStyle(Image);
