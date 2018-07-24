import withStyle from "../../../global/withStyle";

/** 
  * @desc Image component can be used to display Images. This component is connected with Styled component
  *  to add inline styles.
  *  @Src : Src is mendatory props to display images.
*/

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
