

import PropTypes from 'prop-types';

const Description = ({children, className}) => {
    return (
        <>
            <p
                className={className}
            >
                {children}
            </p>
        </>
    )
}

Description.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

export default Description;