import React from 'react';
import { Link } from 'react-router-dom';
import { to_slug } from '../../../../../lib/toSlug.js'

function ItemCarouselProduct({ data }) {
    const handleDragStart = (e) => e.preventDefault();
    return (
        <div className="item" data-value="1">
            <div className="item-show">
                <img src={data.img} alt="pcbuid" onDragStart={handleDragStart} />
                <div className="prices">
                    <div className="price-item">
                        <Link className='name' to={`/product/${data.type.name}-${to_slug(data.name)}/${data.id}`} >{data.name}</Link>
                        <div className="price">
                            <p className="old-price">{Number(data.oldPrice).toLocaleString('vi-VN')}<i>đ</i></p>
                            <p className="new-price">{Number(data.oldPrice).toLocaleString('vi-VN')}<i>đ</i></p>
                            <div className="sale">-{data.fix}%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemCarouselProduct;