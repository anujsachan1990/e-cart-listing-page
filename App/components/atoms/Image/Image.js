import PropTypes from "prop-types";
import withStyle from "../../../global/withStyle";

/** 
  * @desc Image component can be used to display Images. This component is connected with Styled component
  *  to add inline styles.
  *  @Src : Src is mendatory props to display images.
*/

const Image = ({ className, src, placeholderSrc, alt, ref, ...other }) => (
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

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  placeholderSrc: PropTypes.string,
  className: PropTypes.string
};

export default withStyle(Image);
