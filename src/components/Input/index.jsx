import './style.css';
import PropTypes from 'prop-types';

const Input = ({ type, placeholder, label, name, ...props }) => {
    
    return (
        <div className='input-box'>
            <label htmlFor={name} className='label'>{label}</label>
            <input
                {...props}
                className='input'
                type={type} 
                placeholder={placeholder} 
                name={name} 
                id={name} 
                required />
        </div>
    )
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string.isRequired
};

export default Input;