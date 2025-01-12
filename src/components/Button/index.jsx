import PropTypes from 'prop-types';
import './style.css';

const Button = ({ children, onClick, type = 'button', className = '' }) => {
    return (
        <button type={type} className={`button ${className}`} onClick={onClick}>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    className: PropTypes.string,
};

export default Button;