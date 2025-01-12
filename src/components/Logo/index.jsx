import "./style.css";
import PropTypes from 'prop-types';

const Logo = (props) => {
    const { src, alt } = props;

    return (
        <div className="logo">
            <img src={src} alt={alt} />
        </div>
    );
}
Logo.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default Logo;