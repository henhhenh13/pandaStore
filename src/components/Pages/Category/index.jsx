import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../Header'
import Footer from '../../Footer'
import './Category.scss'
import CategoryItem from './CategoryItem';

function Category(props) {
    let { search, manufacturer } = useParams();
    const [data, setData] = useState();

    useEffect(() => {
        if (manufacturer) {
            fetch(`https://json-server-panda.herokuapp.com/product?type.name=${search}&manufacturer=${manufacturer}`)
                .then(res => res.json())
                .then(data => {
                    setData(data)
                    window.scroll(0, 0)
                });
        } else {
            fetch(`https://json-server-panda.herokuapp.com/product?type.name=${search}`)
                .then(res => res.json())
                .then(data => {
                    setData(data)
                    window.scroll(0, 0)
                });
        }
    }, [search, manufacturer]);

    return (
        <div>
            <Header />

            <div className='search-page'>
                <div className="title-top container">
                    <h2 className='title'>Tìm kiếm</h2>
                    <p className='result'>Kết quả tìm kiếm cho <i>{`"${search}".`}</i></p>
                </div>
                <CategoryItem data={data} />
            </div>



            <Footer />


        </div>
    );
}

export default Category;