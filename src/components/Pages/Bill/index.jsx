import React from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import { IoReturnDownBack } from 'react-icons/io5';
import { Link } from 'react-router-dom';

import './Bill.scss';
import BillCard from './BillCard';

function Bill(props) {
    const getBills = localStorage.getItem('UserPandaStoreBill');
    const bills = getBills ? JSON.parse(getBills) : null;

    return (
        <div className='bill'>
            <Header />
            {
                bills ?
                    bills.map((item, index) => (
                        <BillCard bills={item} key={index} />
                    ))
                    :
                    <div className="notthing container text-center">
                        <h2>Hóa đơn</h2>
                        <p>Bạn chưa mua sản phẩm nào!</p>
                        <Link to={`/search/`}><span><IoReturnDownBack /></span> Tiếp tục mua hàng</Link>
                    </div>
            }
            <Footer />
        </div>
    );
}

export default Bill;