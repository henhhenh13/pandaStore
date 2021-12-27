import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FiLoader } from 'react-icons/fi';

import Header from '../../Header'
import Footer from '../../Footer'
import './SearchPage.scss'
import SearchItem from './SearchItem';

function SearchPage(props) {
    let { search } = useParams();
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!search) {
            fetch(`https://json-server-panda.herokuapp.com/product`)
                .then(res => res.json())
                .then(data => {
                    setData(data)
                    setLoading(true)
                    window.scroll(0, 0)
                });
        } else {
            fetch(`https://json-server-panda.herokuapp.com/product?q=${search}`)
                .then(res => res.json())
                .then(data => {
                    setData(data)
                    setLoading(true)
                    window.scroll(0, 0)
                });
        }
        return () => {
            setLoading(false);
        }
    }, [search]);

    return (
        <div>
            <Header />


            <div className="search-page">
                <div className="title-top container">
                    <h2 className='title'>Tìm kiếm</h2>
                    <p className='result'>Kết quả tìm kiếm cho <i>{search ? search : "Tất cả"}</i></p>
                </div>
                {
                    data && data.length > 0 ?
                        <SearchItem data={data} />
                        :
                        <h2 className='search-null text-center'>Không có kết quả tìm kiếm được trả về</h2>
                }
            </div>

            <div className={`loading ${!loading ? 'show' : ''}`}><span><FiLoader /></span></div>

            <Footer />


        </div>
    );
}

export default SearchPage;