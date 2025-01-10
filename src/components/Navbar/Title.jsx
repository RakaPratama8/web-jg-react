import "./style.css";
import PropTypes from 'prop-types';

const Title = (props) => {
    const { children } = props;
    
    return (
        <h1 className="navbar-title">{children}</h1>
    )
}
Title.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Title;