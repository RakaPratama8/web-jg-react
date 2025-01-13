import { useState,  } from 'react';
import { useNavigate } from 'react-router-dom';

import Input from '../Input';
import Button from '../Button';
import Logo from '../Logo';
import './style.css';
import logoMacan from '../../assets/macan-jak.png';

const FormRegister = () => {
    const [member, setMember] = useState({
        nama: '',
        npm: '',
        ttl: '',
        domisili: '',
        angkatan: ''
    });

    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleAddMember = async (e) => {
        e.preventDefault();
        
        if (!member.nama || !member.npm || !member.ttl || !member.domisili || !member.angkatan) {
            setError('All fields are required');
            return;
            }

        setError(null);

        try {
            const res = await fetch('http://localhost:1234', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nama: member.nama,
                    npm: member.npm,
                    ttl: member.ttl,
                    domisili: member.domisili,
                    angkatan: member.angkatan
                }),
            });

            if (!res.ok) {
                throw Error("Failed to add member");
            }

            const data = await res.json();
            navigate('/members');
            console.log(data);

            setMember({
                nama: '',
                npm: '',
                ttl: '',
                domisili: '',
                angkatan: '',
            });
                
        } catch (err) {
            console.error(err);
            setError(err.message || 'Something went wrong.');
        }
    }
    return (
        <div>
            <Logo 
                src={logoMacan}
                alt='logo'
            />
            <div>
                <h1 className='title-register'>
                    Register
                </h1>
                <form
                    onSubmit={handleAddMember}
                    id='addMemberForm'
                >
                    <Input 
                        label='Nama'
                        name='nama'
                        type='text'
                        placeholder='Enter your name'
                        value={member.nama}
                        onChange={(e) => setMember({ ...member, nama: e.target.value })}
                    />
                    <Input
                        label='NPM'
                        name='npm'
                        type='number'
                        placeholder='Enter your NPM'
                        value={member.npm}
                        onChange={(e) => setMember({ ...member, npm: e.target.value })}
                    />
                    <Input 
                        label='TTL'
                        name='ttl'
                        type='date'
                        placeholder='Enter your date of birth'
                        value={member.ttl}
                        onChange={(e) => setMember({ ...member, ttl: e.target.value })}
                    />
                    <Input 
                        label='Domisili'
                        name='domisili'
                        type='text'
                        placeholder='Enter your domisili'
                        value={member.domisili}
                        onChange={(e) => setMember({ ...member, domisili: e.target.value })}
                    />
                    <Input
                        label='Angkatan'
                        name='angkatan'
                        type='text'
                        placeholder='Enter your angkatan'
                        value={member.angkatan}
                        onChange={(e) => setMember({ ...member, angkatan: e.target.value })}
                    />
                    <Button
                        type='submit'
                        className='submit-button'
                    >Submit</Button>
                    {error && <p className='error'>{error}</p>}
                </form>
            </div> 
        </div>
    )
}

export default FormRegister;