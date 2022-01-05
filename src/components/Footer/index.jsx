import React from 'react';
import './Footer.scss';

function Footer(props) {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-12">
                        <h3>công ty tnhh thương mại panda store</h3>
                        <h3>email: henhhenh13@gmail.com</h3>

                        <h3>hệ thống tông đài miễn phí: <small>(làm việc từ 09h00 - 19h00)</small></h3>

                        <p>Gọi mua hàng: <strong>18006975</strong></p>
                        <p>hỗ trợ khách hàng: <strong>18006173</strong></p>
                        <ul>
                            <li>
                                <a href="/">Chính sách bảo hàng</a>
                            </li>
                            <li>
                                <a href="/">Chính sách thanh toán</a>
                            </li>
                            <li>
                                <a href="/">Chính sách giao hàng</a>
                            </li>
                            <li>
                                <a href="/">Chính sách bảo mật</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-5 col-md-12">
                        <a href="/" className="store-location">Hệ thống cửa hàng</a>
                        <h3>showroom hcm <small>(Làm việc từ 8h00 - 20h00)</small></h3>
                        <p>- Địa chỉ 1: 78-80-82 Hoàng Hoa Thám, Phường 12, Quận Tân Bình.</p>
                        <h3>showroom hn <small>(Làm việc từ 9h00 - 19h00)</small></h3>
                        <p>- Địa chỉ : 37 Ngõ 121 Thái Hà, Phường Trung Liệt, Quận Đống Đa.</p>

                    </div>
                    <div className="col-lg-2 col-md-12"></div>
                </div>
            </div>

        </div>
    );
}

export default Footer;