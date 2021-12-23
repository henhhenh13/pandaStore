import React from 'react';
import { Button, Modal, Row, Col, Container } from 'react-bootstrap';
import './ImgModal.scss'

function ImgModal(props) {
    const imgs = props.imgs;
    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            {
                                imgs.map((img, index) => (
                                    <Col xs={6} md={6} key={index} >
                                        <h3>{`Ảnh số ${index + 1}`}</h3>
                                        <div className='d-flex align-items-center h-100'>
                                            <img className='img-modal' src={img} alt="anh" />
                                        </div>
                                    </Col>
                                ))

                            }

                        </Row>
                    </Container>

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Dóng</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ImgModal;