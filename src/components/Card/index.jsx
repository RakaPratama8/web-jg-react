import PropTypes from 'prop-types';

import Description from "./Description";
import Image from "./Image";
import './card.css';


const Card = ({ children, type }) => {
    return (
        <div
            className={type==='1' ? 'card-1' : 'card-2'}
        >
            <Image 
                className={type==='1' ? 'card-image-1' : 'card-image-2'}
            />
            <Description
                className='description-text'
            >
                {children}
            </Description>
        </div>
    )
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string.isRequired,
};

export default Card;