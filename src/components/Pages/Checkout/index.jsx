import { useEffect } from 'react';
import { useState } from 'react';
import { Form, Button, Row, Col, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Checkout.scss'
import CheckoutItem from './CheckoutItem';

function Checkout(props) {
    let navigate = useNavigate();
    const loadUserBill = localStorage.getItem('UserPandaStoreBill');
    const [userCart, setUserCart] = useState(() => {
        const loadUserCart = localStorage.getItem('UserPandaStore');
        return JSON.parse(loadUserCart)
    });
    const userBill = JSON.parse(loadUserBill) || [];
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleBuy(e) {
        e.preventDefault();
        const utc = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
        const newUserCart = { ...userCart, product: [], totalPrice: 0 };
        userBill.push({ ...userCart, date: utc })
        localStorage.setItem('UserPandaStoreBill', JSON.stringify(userBill));

        localStorage.setItem('UserPandaStore', JSON.stringify(newUserCart));

        setUserCart(newUserCart);
        navigate('/bill');
    }
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className='check-out container-lg-fuild container-md'>
            <div className="row ">
                <div className="col-lg-1 col-md-0"></div>
                <div className="col-lg-4 col-md-12 left mt-5 pl-lg-5">
                    <h1>Gearvn.com</h1>
                    <h2 className=''>Thông tin giao hàng</h2>
                    <div className="nav mb-3"></div>
                    <Form >
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="floatingInputGrid">
                                <Form.Control type="text" placeholder="Họ và tên" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Control type="email" placeholder="Email" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridSdt">
                                <Form.Control type="number" placeholder="Số điện thoại" />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Control placeholder="Địa chỉ" />
                        </Form.Group>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridAddress2">
                                <Form.Control type="text" placeholder="Tỉnh/Thành" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridAddress3">
                                <Form.Control type="text" placeholder="Quận/Huyện" />
                            </Form.Group>
                        </Row>
                        <Button variant="primary" size='lg' onClick={handleShow}>
                            Thanh toán đơn hàng
                        </Button>
                    </Form>

                </div>
                <div className="col-lg-1 col-md-0"></div>
                <div className="col-lg-6 col-md-12 pl-lg-5 right">
                    <div className="row">
                        <div className="col-lg-9 col=md-12">
                            <div className="product">
                                {
                                    userCart.product.map((item, index) => (
                                        <CheckoutItem item={item} key={index} />
                                    ))
                                }
                            </div>
                            <div className="total-lines d-flex">
                                <p>Tổng cộng</p>
                                <p><span className="vnd">VND </span>{userCart.totalPrice.toLocaleString('vi-vn')}</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-0"></div>
                    </div>

                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Thông báo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h2>Xác nhận thanh toán đơn hàng</h2>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" size='lg' onClick={handleClose}>
                        Dóng
                    </Button>
                    <Button variant="primary" size='lg' onClick={handleBuy}>
                        Xác nhận
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    );
}

export default Checkout;