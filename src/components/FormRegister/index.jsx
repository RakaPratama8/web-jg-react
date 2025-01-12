
import Input from '../Input';
import Button from '../Button';
import Logo from '../Logo';
import './style.css';
import logoMacan from '../../assets/macan-jak.png';

const FormRegister = () => {
    
    return (
        <div>
            <Logo 
                src={logoMacan}
                alt='logo'
            />
            <div>
                <h1 className='title'>
                    Register
                </h1>
                <form
                    action=""
                    method="post"
                >
                    <Input 
                        label='Name'
                        name='name'
                        type='text'
                        placeholder='Enter your name'
                    />
                    <Input 
                        label='TTL'
                        name='ttl'
                        type='date'
                        placeholder='Enter your date of birth'
                    />
                    <Input 
                        label='Domisili'
                        name='domisili'
                        type='text'
                        placeholder='Enter your domisili'
                    />
                    <Input
                        label='Angkatan'
                        name='angkatan'
                        type='text'
                        placeholder='Enter your angkatan'
                    />
                    <Button>Submit</Button>
                </form>
            </div> 
        </div>
    )
}

export default FormRegister;