import PropTypes from 'prop-types';
import "./style.css";

const Link = ({ children, href }) => {
    return (
        <a
            href={href}
            className="navbar-link"
        >
            {children}
        </a>
    )
}

Link.propTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.string.isRequired,
};

export default Link;
