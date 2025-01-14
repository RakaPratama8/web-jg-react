import { useEffect, useState } from "react";
import axios from 'axios';

import Button from "../../components/Button";
import Input from "../../components/Input";

const Admin = () => {

    const [members, setMembers] = useState([]);
    const [domisili, setDomisili] = useState('');
    const [npm, setNpm] = useState('');

    useEffect(() => {
        const getMembers = async () => {
            try {
                const res = await axios.get('http://localhost:1234');
                setMembers(res.data)
            } catch (err) {
                console.error(err.message || "Failed to show members")
            }
        };
        getMembers();
    }, []);

    const handleDeleteMember = async (npmMember) => {
        try {
            const res = await fetch('http://localhost:1234', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ npm: npmMember }),
            });

            if (!res.ok) {
                throw new Error('Failed to delete member');
            }

            const data = await res.json();
            console.log(data);
            setMembers((prevMembers) => prevMembers.filter((member) => member.npm !== npmMember));
        } catch (error) {
            console.error(error.message || 'Something went wrong while trying to delete the member.');
        }
    }
    
    const handleUpdateMember = async (npmMember, domisiliBaru) => {
        try {
            const res = await fetch('http://localhost:1234', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ npm: npmMember, domisili: domisiliBaru }),
            });

            if (!res.ok) {
                throw new Error('Failed to update member');
            }

            const data = await res.json();
            console.log(data);
            setMembers((prevMembers) => prevMembers.map((member) => {
                if (member.npm === npmMember) {
                    return { ...member, domisili: domisiliBaru };
                }
                return member;
            }));
        } catch (error) {
            console.error(error.message || 'Something went wrong while trying to update the member.');
        }
    }

    return (
        <div>
            <div>
                <h1>Admin Page</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Nama</th>
                            <th>NPM</th>
                            <th>TTL</th>
                            <th>Domisili</th>
                            <th>Angkatan</th>
                        </tr>
                    </thead>
                    <tbody>
                        {members.length > 0 ? (
                            members.map((member) => (
                                <tr key={member.npm}>
                                    <td>{member.nama}</td>
                                    <td>{member.npm}</td>
                                    <td>{member.ttl}</td>
                                    <td>{member.domisili}</td>
                                    <td>{member.angkatan}</td>
                                    <td>
                                        <Button
                                            className='submit-button-delete'
                                            onClick={() => {
                                                if (window.confirm(`Are you sure you want to delete ${member.nama}?`)) {
                                                    handleDeleteMember(member.npm)
                                                }
                                            }}
                                        >
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <td colSpan='6'>
                                No Data Available
                            </td>
                        )}
                    </tbody>
                </table>
            </div>
            <div>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleUpdateMember(npm, domisili);
                    }}
                >
                    <Input
                        type='text'
                        placeholder='Domisili'
                        label='Domisili'
                        name='domisili'
                        onChange={(e) => setDomisili(e.target.value)}
                        value={domisili}
                    />
                    <Input
                        type='text'
                        placeholder='NPM'
                        label='NPM'
                        name='npm'
                        onChange={(e) => setNpm(e.target.value)}
                        value={npm}
                    />
                    <Button
                        className='submit-button-update'
                        type="submit"
                    >
                        Update
                    </Button>
                </form>
            </div>

        </div>
    )
}

export default Admin;
