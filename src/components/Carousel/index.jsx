import { useNavigate } from 'react-router-dom';

import './style.css';
import Button from '../Button';

const Carousel = () => {
    
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/input');
    }

    return (
        <div className='carousel'>
            <h1 className='title'>Atur Kuliahmu Untuk Persija</h1>
            <Button
                onClick={handleClick}
                className='button-join'
            >
                Join Us Here
            </Button>
        </div>
    )
}

export default Carousel;