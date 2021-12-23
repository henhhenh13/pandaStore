import React from 'react';
import { Link } from 'react-router-dom'
import { to_slug } from '../../../../lib/toSlug.js'

function Item({ item }) {
    const { id, name, manufacturer, img, fix, type, series } = item;
    const oldPrice = Number(item.oldPrice);

    return (
        <div className="col-xl-2-4 col-md-6 col-6 mb-5" >
            <div className="item" data-value="1">
                <div className="item-show">
                    <Link to={`/product/${type.name}-${to_slug(name)}/${id}`} className="img">
                        <img src={img[0]} alt="pcbuid" />
                    </Link>
                    <div className="prices">
                        <div className="info-buy d-flex w-100">
                            <Link to={`/product/${type.name}-${to_slug(name)}/${id}`} className="click-info">Click để xem chi tiết</Link>
                            <Link to={`/product/${type.name}-${to_slug(name)}/${id}`} className="click-buy">Đặt hàng</Link>
                        </div>
                        <div className="price-item">
                            <h3 className="name">{type.description} {series} {manufacturer} {name}</h3>
                            <div className="price">
                                <p className="old-price">{oldPrice.toLocaleString('vi-VN')}</p>
                                <p className="new-price">{oldPrice.toLocaleString('vi-VN')}<i>đ</i></p>
                                <div className="sale">-{fix}%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Item;