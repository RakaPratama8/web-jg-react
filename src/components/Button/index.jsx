import PropTypes from 'prop-types';
import './style.css';

const Button = ({ children, type = 'button', className, ...props }) => {
    
    return (
        <button
            {...props}
            type={type} 
            className={className}
        >
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