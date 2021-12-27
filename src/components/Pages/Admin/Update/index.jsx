import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { useNavigate, useParams } from "react-router-dom";
import { FiLoader } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { FiDelete } from 'react-icons/fi'
import './Update.scss';
import { useRef } from 'react';

function Update(props) {
    let { id } = useParams();
    let value, name;
    const fileImg = useRef();
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [data, setData] = useState(false);
    const [addImg, setAddImg] = useState(['null']);
    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //Call api lấy ra sản phẩm sửa và category
    useEffect(() => {
        fetch(`https://json-server-panda.herokuapp.com/category`)
            .then(res => res.json())
            .then(data => {
                setCategory(data)
            })

        fetch(`https://json-server-panda.herokuapp.com/product/${id}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
                setLoading(true)
            })

        return () => {
            setLoading(false);
        }

    }, [id])

    //Hàm call api sản phẩm để chỉnh sửa nhận id từ trang admin 
    async function updateData(url = `https://json-server-panda.herokuapp.com/product/${id}`, data = {}) {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return response.json();
    }

    //Hàm xử lý sự kiện sửa, PUT api lên sever và đóng modal
    function handleSubmitAdd(e) {
        e.preventDefault();
        setLoading(false)
        updateData(`https://json-server-panda.herokuapp.com/product/${id}`, data)
            .then(data => {
                setLoading(true)
                navigate('/admin');
            });
        handleClose();
    }

    //Hàm xử lý sự kiện nhập
    function handleInputs(e) {
        name = e.target.name;
        value = e.target.value;
        setData({ ...data, [name]: value });
    }

    //Hàm xử lý sự kiện thêm ảnh
    const handleAddImg = (e) => {
        e.preventDefault();
        name = e.target.name;
        value = fileImg.current.value;
        setData({ ...data, [name]: [...data.img, value] });
        setAddImg([...addImg, value]);
        fileImg.current.value = "";
        fileImg.current.focus();
    }

    //Hàm xử lý sự kiện xóa ảnh
    function handleDeleteImg(e, index) {
        e.preventDefault()
        const newArrayImg = data.img.splice(index, 1);
        setData({ ...data, [data.img]: newArrayImg });
        setAddImg(addImg.splice(-1, 1))
    }

    //Hàm xử lý sự kiện thay đổi select chọn
    function handleChangeSelect(e) {
        name = e.target.name;
        const value = category.find(item => item.id === Number(e.target.value));
        setData({ ...data, [name]: value });
    }
    return (
        <div className='create container mb-5'>
            {
                data &&
                <div>
                    <div className="title pt-3 pb-3 d-flex flex-column">
                        <h2 >Trang sửa sản phẩm</h2>
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
                                value={data.name}
                                type="text" placeholder="Nhập Tên Sản Phẩm" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Hãng Sản Xuất</Form.Label>
                            <Form.Control
                                onInput={handleInputs}
                                name="manufacturer"
                                value={data.manufacturer}
                                type="text" placeholder="Nhập Hãng Sản Xuất" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Nhập Giá Củ</Form.Label>
                            <Form.Control
                                onInput={handleInputs}
                                name="oldPrice"
                                value={data.oldPrice}
                                type="number" placeholder="Nhập Giá Củ" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Giá Giảm(%)</Form.Label>
                            <Form.Control
                                onInput={handleInputs}
                                name="fix"
                                value={data.fix}
                                type="number" placeholder="Nhập Giá Giảm(chỉ nhập số)" />
                        </Form.Group>
                        <Form.Label>Loại sản phẩm</Form.Label>
                        <Form.Select aria-label="Default select example" size="lg"
                            onChange={handleChangeSelect}
                            name="type"
                            value={data.type.id}
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
                                data &&
                                data.img.map((img, index) => (
                                    <div className="img-control" key={index}>
                                        <img className='img' src={img} alt="img" />
                                        <button
                                            className='delete-img-btn'
                                            title='Xóa ảnh này'
                                            value={index}
                                            onClick={(e) => handleDeleteImg(e, index)}
                                        ><FiDelete /></button>
                                    </div>
                                ))
                            }
                        </div>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Chọn ảnh</Form.Label>
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
                            Sửa sản phẩm
                        </Button>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Thông báo</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Bạn có muốn sửa sản phẩm này không</Modal.Body>
                            <Modal.Footer>
                                <Button variant="primary" size="lg" onClick={handleSubmitAdd}>
                                    Sửa ngay
                                </Button>
                                <Button variant="secondary" size="lg" onClick={handleClose}>
                                    Không
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Form>
                </div>
            }
            <div className={`loading ${!loading ? 'show' : ''}`}><span><FiLoader /></span></div>
        </div>
    );
}

export default Update;