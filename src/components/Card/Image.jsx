import PropTypes from 'prop-types';

const Image = ({className}) => {

    return (
        <div
            className={className}
        >
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
};

export default Image;