import React from 'react';
import { Table, } from 'react-bootstrap';
import BillItem from '../BillItem';

function BillCard({ bills }) {
    return (
        <div className='bill-card'>
            <div className='cart'>
                <div>
                    <h1 className='text-center mt-5 mb-4'>Đơn hàng: {bills.date}</h1>
                    <div className="cart-container container mb-3">
                        <Table bordered size="lg" variant='white'>
                            <thead>
                                <tr>
                                    <th>Sản phẩm</th>
                                    <th>Tên sản phẩm</th>
                                    <th>Số lượng</th>
                                    <th>Giá tiền</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    bills.product.map((item, index) => (
                                        <BillItem item={item} key={index} />
                                    ))
                                }
                                <tr>
                                    <td colSpan={3} className='result'>Tổng Tiền</td>
                                    <td className='result'>{bills.totalPrice.toLocaleString('vi-VN')}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>

            </div >

        </div>
    );
}

export default BillCard;