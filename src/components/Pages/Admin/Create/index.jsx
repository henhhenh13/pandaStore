import { useState, useRef } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { FiLoader } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { FiDelete } from 'react-icons/fi'
import './Create.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';


function Create(props) {
    const fileImg = useRef();
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [addImg, setAddImg] = useState(['null']);

    let value, name;

    const [inputData, setInputData] = useState({
        name: "",
        manufacturer: "",
        oldPrice: "",
        fix: "",
        type: {},
        img: []
    });

    //Lấy dữ liệu category và set vào sate category
    useEffect(() => {
        fetch(`https://json-server-panda.herokuapp.com/category`)
            .then(res => res.json())
            .then(data => {
                setCategory(data)
            })
    }, [])


    //Hàm POST data
    async function postData(url = 'https://json-server-panda.herokuapp.com/product', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }

    //Khi submit form post dữ liệu đã nhập lên sever
    function handleSubmitAdd(e) {
        e.preventDefault();
        setLoading(false)
        postData('https://json-server-panda.herokuapp.com/product', inputData)
            .then(data => {
                setLoading(true)
                navigate('/admin');
            });
        handleClose();
    }

    //Các hàm input hoat động
    //Lấy name của Input làm key và lấy ra value của input
    //Hàm xử lý input
    function handleInputs(e) {
        name = e.target.name;
        value = e.target.value;
        setInputData({ ...inputData, [name]: value });
    }

    //Hàm xử lý khi thêm ảnh
    const handleAddImg = (e) => {
        e.preventDefault();
        name = e.target.name;
        value = fileImg.current.value;
        setInputData({ ...inputData, [name]: [...inputData.img, value] });
        setAddImg([...addImg, value]);
        fileImg.current.value = "";
        fileImg.current.focus();
    }

    //Hàm xử lý khi xóa ảnh
    function handleDeleteImg(e, index) {
        e.preventDefault()
        const newArrayImg = inputData.img.splice(index, 1);
        setInputData({ ...inputData, [inputData.img]: newArrayImg });
        setAddImg(addImg.splice(-1, 1))
    }

    //Hàm xử lý khi thay đổi select
    //Value lấy từ element là id của category đã chọn, lấy id đó tìm trong category lấy ra obj làm value
    function handleChangeSelect(e) {
        name = e.target.name;
        const value = category.find(item => item.id === Number(e.target.value));
        setInputData({ ...inputData, [name]: value });
    }

    return (
        <div className='create container mb-5'>
            <div className="title pt-3 pb-3 d-flex flex-column mb-4">
                <h2 >Trang thêm sản phẩm</h2>
                <Link to="/admin">Về trang quản lý</Link>
            </div>
            <Form
                onSubmit={handleSubmitAdd}
            >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Tên Sản Phẩm</Form.Label>
                    <Form.Control
                        onInput={handleInputs}
                        name="name"
                        value={inputData.name}
                        type="text" placeholder="Nhập Tên Sản Phẩm" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Hãng Sản Xuất</Form.Label>
                    <Form.Control
                        onInput={handleInputs}
                        name="manufacturer"
                        value={inputData.manufacturer}
                        type="text" placeholder="Nhập Hãng Sản Xuất" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Nhập Giá Củ</Form.Label>
                    <Form.Control
                        onInput={handleInputs}
                        name="oldPrice"
                        value={inputData.oldPrice}
                        type="number" placeholder="Nhập Giá Củ" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Giá Giảm(%)</Form.Label>
                    <Form.Control
                        onInput={handleInputs}
                        name="fix"
                        value={inputData.fix}
                        type="number" placeholder="Nhập Giá Giảm(chỉ nhập số)" />
                </Form.Group>
                <Form.Label>Loại sản phẩm</Form.Label>
                <Form.Select aria-label="Default select example" size="lg"
                    onChange={handleChangeSelect}
                    name="type"
                >
                    <option>Chọn loại sản phẩm</option>
                    {
                        category &&
                        category.map((select, index) => (
                            <option value={select.id} key={index}>{select.description}</option>
                        ))
                    }
                </Form.Select>
                <Form.Label>Ảnh của sản phẩm</Form.Label>
                <div className="img-box d-flex">
                    {
                        inputData.img.length > 0 ?
                            inputData.img.map((img, index) => (
                                <div className="img-control" key={index}>
                                    <img className='img' src={img} alt={img} />
                                    <button
                                        className='delete-img-btn'
                                        title='Xóa ảnh này'
                                        value={index}
                                        onClick={(e) => handleDeleteImg(e, index)}
                                    ><FiDelete /></button>
                                </div>
                            ))
                            :
                            <div className='d-flex align-items-center'>
                                <img className='no-img' src={process.env.PUBLIC_URL + "/images/product/no-img.jpg"} alt="img" />
                                <h3>Chưa có ảnh nào được thêm</h3>
                            </div>
                    }
                </div>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Nhập link ảnh (Ví dụ: https://product/anh.png)</Form.Label>
                    <Form.Control
                        type="text"
                        ref={fileImg}
                    />
                    <Button
                        name="img"
                        variant="primary mt-3"
                        onClick={handleAddImg}
                    >
                        Thêm ảnh
                    </Button>

                </Form.Group>

                <Button variant="primary" onClick={handleShow} className='mt-5'>
                    Thêm sản phẩm
                </Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Thông báo</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Bạn có muốn thêm sản phẩm này không</Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" size="lg" onClick={handleSubmitAdd}>
                            Thêm ngay
                        </Button>
                        <Button variant="secondary" size="lg" onClick={handleClose}>
                            Không
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Form>
            <div className={`loading ${!loading ? 'show' : ''}`}><span><FiLoader /></span></div>
        </div>
    );
}

export default Create;