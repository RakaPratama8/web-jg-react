import Card from "../Card"
import './content.css'


const Content = () => {

    return (
        <div
            className="cards-container"
        >
            <Card
                type='1'
            >
                Persija Jakarta, klub sepak bola Indonesia yang berbasis di Jakarta, didirikan pada 28 November 1928. Nama &quot;Persija&quot; merupakan singkatan dari Persatuan Sepakbola Indonesia Jakarta. Klub ini merupakan salah satu yang tertua di Indonesia dan memiliki sejarah panjang dalam dunia sepak bola tanah air.
            </Card>
            <Card
                type='2'
            >
                Jakampus Gunadarma adalah merupakan suatu wadah bagi suporter Persija
                terutama Mahasiswa Universitas Gunadarma yang mencintai Persija untuk berorganisasi
                dan menampung seluruh daya suporter persija yang terdapat di Universitas Gunadarma,Berdiri pada 4 November 2009            
            </Card>
        </div>
    )
}

export default Content