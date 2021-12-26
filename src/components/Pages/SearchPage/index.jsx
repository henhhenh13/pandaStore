import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../Header'
import Footer from '../../Footer'
import './SearchPage.scss'
import SearchItem from './SearchItem';

function SearchPage(props) {
    let { search } = useParams();
    const [data, setData] = useState();

    useEffect(() => {
        if (!search) {
            fetch(`https://json-server-panda.herokuapp.com/product`)
                .then(res => res.json())
                .then(data => {
                    setData(data)
                    window.scroll(0, 0)
                });
        } else {
            fetch(`https://json-server-panda.herokuapp.com/product?q=${search}`)
                .then(res => res.json())
                .then(data => {
                    setData(data)
                    window.scroll(0, 0)
                });
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
                <SearchItem data={data} />
            </div>

            <Footer />


        </div>
    );
}

export default SearchPage;