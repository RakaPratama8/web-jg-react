import Navbar from '../../components/Navbar';
import TableMember from '../../components/TableMember';
import './style.css'

const Members = () => {
    return (
        <>
            <Navbar />
            <div className='members-container'>
            <h1
                className='header-member'
            >
                Our Members
            </h1>
            <TableMember />
        </div>
        </>
    )
}

export default Members;