import Navbar from '../../components/Navbar';
import TableMember from '../../components/TableMember';
import './style.css'

const Members = () => {
    return (
        <div>
            <Navbar />
            <h1
                className='header-member'
            >
                Our Members
            </h1>
            <TableMember />
        </div>
    )
}

export default Members;