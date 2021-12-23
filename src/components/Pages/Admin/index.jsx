import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { Pagination } from 'react-bootstrap'
import { Table, Button, Modal } from 'react-bootstrap';
import './Admin.scss'
import ImgModal from './AdminModals/ImgModal';


function Admin(props) {
    //Trang hiển thị sản phẩm
    const [renderTable, setRenderTable] = useState(false);
    const [data, setData] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [modalImgs, setModalsImg] = useState(["notthing"]);
    const [show, setShow] = useState(false);
    const [statusDeletItem, setStatusDeletItem] = useState();
    const [statusDelete, setStatusDelete] = useState(false);
    const [numberPage, setNumberPage] = useState(5);
    const [pageSetting, setPageSetting] = useState({
        _limit: 15,
        _page: 1
    });
    let items = [];
    for (let number = 1; number <= Math.ceil(numberPage / pageSetting._limit); number++) {
        items.push(
            <Pagination.Item data-value={number} key={number} active={number === pageSetting._page
            }>
                {number}
            </Pagination.Item >,
        );
    }

    // Call api lấy tất cả sản phẩm 
    useEffect(() => {
        fetch(`https://json-server-panda.herokuapp.com/product`)
            .then(res => res.json())
            .then(data => {
                setNumberPage(data.length)
            })


        fetch(`https://json-server-panda.herokuapp.com/product?_page=${pageSetting._page}&_limit=${pageSetting._limit}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
            .catch(console.log("Connect Fail.."))
    }, [renderTable, pageSetting]);

    //Hàm đóng modal
    const handleClose = () => setShow(false);
    // Hàm show modal và xóa item khi chọn xóa
    const handleShow = (e) => {
        setStatusDeletItem(e.target.value)
        setStatusDelete(true);
        setShow(true);
    }

    // Hàm xóa 1 sản phẩm và render lại table
    function handleDelete(e) {
        if (statusDelete) {
            fetch('https://json-server-panda.herokuapp.com/product/' + statusDeletItem, {
                method: 'DELETE',
            })
                .then(res => res.text())
                .then(res => setRenderTable(!renderTable))
                .catch(console.log("Connect Fail.."))
            handleClose()
            setStatusDelete(false);
            const reslutPage = Number((data.length / pageSetting._limit).toFixed());
            if (reslutPage === 0) {
                const pageNumber = pageSetting._page - 1;
                setPageSetting({
                    ...pageSetting,
                    _page: pageNumber
                });
            }
        }
    }

    // Mở modal ảnh của sản phẩm
    function handleOnModal(e) {
        setModalsImg(e.target.value.split(','))
        setModalShow(true)
    }

    function handleChangePage(e) {
        const newPage = Number(e.target.dataset.value);
        setPageSetting({
            ...pageSetting,
            _page: newPage
        });
    }

    return (
        <div className='form-admin container'>
            <div className="title d-flex">
                <div className="left">
                    <h2>Trang Chỉnh Sửa</h2>
                    <Link to="/" className='back'>Về Trang chủ</Link>
                </div>
                <div className="buttons ml-auto">
                    <Link to="create" className='add'>
                        Thêm Sản Phẩm
                    </Link>
                </div>
            </div>
            <div className="table-main">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Stt</th>
                            <th>Tên Sản Phẩm</th>
                            <th>Hãng Sản xuất</th>
                            <th>Giá Củ</th>
                            <th>Giảm(%)</th>
                            <th>Loại</th>
                            <th>Ảnh</th>
                            <th>Sửa</th>
                            <th>Xóa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data &&
                            data.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.manufacturer}</td>
                                    <td>{item.oldPrice}</td>
                                    <td>{item.fix}</td>
                                    <td>{item.type.description}</td>
                                    <th>
                                        <Button variant="primary" className='show-img-btn' value={item.img} onClick={handleOnModal}>
                                            Xem ảnh
                                        </Button>
                                    </th>
                                    <td>
                                        <Link to={`update/${item.id}`} variant="link" size="lg">Sửa</Link>
                                    </td>
                                    <td>
                                        <Button variant="link" size="lg" value={item.id} onClick={handleShow}>
                                            Xóa
                                        </Button>
                                        <Modal show={show} onHide={handleClose}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>Thông báo</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>Bạn có muốn xóa sản phẩm này không</Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="danger" size="lg" onClick={handleDelete}>
                                                    Xóa ngay
                                                </Button>
                                                <Button variant="secondary" size="lg" onClick={handleClose}>
                                                    Không
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
                <ImgModal
                    imgs={modalImgs}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />

            </div>
            <div>
                <Pagination size="lg" onClick={handleChangePage}>{items}</Pagination>
                <br />
            </div>
        </div >
    );
}

export default Admin;