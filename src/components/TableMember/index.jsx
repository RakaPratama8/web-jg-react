import { useState, useEffect } from 'react';
import axios from 'axios'; 


const TableMember = () => {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        const getMembers = async () => {
            try {
                const res = await axios.get('http://localhost:1234');
                setMembers(res.data)
            } catch(err) {
                console.error(err.message || "Failed to show members")
            }
        };
        getMembers();
    }, []);

    return (
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
                        </tr>
                    ))
                ) : (
                    <td>
                        No Data Available
                    </td>
                )}
            </tbody>
        </table>
    )
}

export default TableMember;