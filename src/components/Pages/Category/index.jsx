import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FiLoader } from 'react-icons/fi';
import Header from '../../Header'
import Footer from '../../Footer'
import './Category.scss'
import CategoryItem from './CategoryItem';

function Category(props) {
    let { search, manufacturer } = useParams();
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        //Nếu chọn thêm mục phụ
        if (manufacturer) {
            fetch(`https://json-server-panda.herokuapp.com/product?type.name=${search}&manufacturer=${manufacturer}`)
                .then(res => res.json())
                .then(data => {
                    setData(data)
                    setLoading(true)
                    window.scroll(0, 0)
                });
        } else {
            //Không chọn mục phụ
            fetch(`https://json-server-panda.herokuapp.com/product?type.name=${search}`)
                .then(res => res.json())
                .then(data => {
                    setData(data)
                    setLoading(true)
                    window.scroll(0, 0)
                });
        }
        return () => {
            setLoading(false)
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
                {
                    data && data.length > 0 ?
                        <CategoryItem data={data} />
                        :
                        <h2 className='search-null text-center'>Danh mục sản phẩm này chưa có sản phẩm</h2>
                }
            </div>
            <div className={`loading ${!loading ? 'show' : ''}`}><span><FiLoader /></span></div>

            <Footer />


        </div>
    );
}

export default Category;