import "./style.css";
import PropTypes from 'prop-types';

const Logo = ({ src, alt, ...props }) => {

    return (
        <div className="logo">
            <img 
                src={src} 
                alt={alt} 
                {...props}
            />
        </div>
    );
}
Logo.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default Logo;