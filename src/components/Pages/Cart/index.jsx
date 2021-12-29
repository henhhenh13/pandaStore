import React, { useMemo, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../Header'
import Footer from '../../Footer'
import { Table, Button } from 'react-bootstrap'
import { IoReturnDownBack } from 'react-icons/io5'
import './Cart.scss'

import { useState } from 'react';
import CartItem from './CartItem';

function Cart(props) {
    let navigate = useNavigate()
    const [userCart, setUserCart] = useState(() => {
        const loadUserCart = localStorage.getItem('UserPandaStore');
        return JSON.parse(loadUserCart) || []
    });

    const total = useMemo(() => {
        if (userCart.product) {
            const products = userCart.product;
            const result = products.reduce((result, item) => {
                return result + Number(item.totalItem)
            }, 0)
            const newUserCart = { ...userCart, totalPrice: result };
            localStorage.setItem('UserPandaStore', JSON.stringify(newUserCart));
            return result
        }

    }, [userCart]);

    const handleCart = {
        handleOnchangeInputSll: function (e) {
            const index = e.target.dataset.index;
            const value = Number(e.target.value);
            if (value >= 0) {
                const product = userCart.product;
                product[index].sll = value;
                product[index].totalItem = product[index].oldPrice * value;
                const newUserCart = { ...userCart, product: product }
                localStorage.setItem('UserPandaStore', JSON.stringify(newUserCart));
                setUserCart(newUserCart)
            }
        },
        handleDeleteItemCart: function (e) {
            e.preventDefault();
            const newProduct = userCart.product;
            const btnDelete = e.target.closest('.btn-delete');
            if (btnDelete) {
                const index = Number(btnDelete.dataset.delete);
                newProduct.splice(index, 1);
                const newUserCart = { ...userCart, product: newProduct }
                localStorage.setItem('UserPandaStore', JSON.stringify(newUserCart));
                setUserCart(newUserCart)
            }
        }
    }
    function handleBuy(e) {
        e.preventDefault();
        navigate('/checkout')
    }
    useEffect(() => {
        window.scrollTo(0, 0)

    }, [])


    return (
        <div className='cart'>
            <Header />
            {
                userCart.product && userCart.product.length > 0
                    ?
                    <div className='cart-body'>
                        <h1 className='text-center mt-5 mb-4'>Giỏ Hàng</h1>
                        <div className="cart-container container mb-3">
                            <Table bordered size="lg" variant='white'>
                                <thead>
                                    <tr>
                                        <th>Sản phẩm</th>
                                        <th>Tên sản phẩm</th>
                                        <th>Số lượng</th>
                                        <th>Giá tiền</th>
                                        <th>Xóa</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        userCart &&
                                        userCart.product.map((item, index) => (
                                            <CartItem item={item} index={index} key={index} handleCart={handleCart} />
                                        ))
                                    }
                                    <tr>
                                        <td colSpan={4} className='result'>Tổng Tiền</td>
                                        <td className='result'>{total && total.toLocaleString('vi-VN')}</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={5}>
                                            <div className="cart-nodes">
                                                <textarea type="text" placeholder='Ghi chú' />
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                            <div className='cart-buttons mt-3'>
                                <div className="row">
                                    <div className="col-md-8"></div>
                                    <div className="col-md-4 text-center">
                                        <Button variant='primary' onClick={handleBuy}>Thanh Toán</Button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    :
                    <div className="notthing container text-center">
                        <h2>Giỏ Hàng</h2>
                        <p>Không có sản phẩm nào trong giỏ hàng!</p>
                        <Link to={`/search/`}><span><IoReturnDownBack /></span> Tiếp tục mua hàng</Link>
                    </div>
            }

            <Footer />
        </div >
    );
}

export default Cart;