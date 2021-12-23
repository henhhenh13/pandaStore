import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegTrashAlt } from 'react-icons/fa'
import { to_slug } from '../../../../lib/toSlug.js'


function CartItem({ item, handleCart, index }) {
    const totalItem = Number(item.oldPrice * item.sll);

    return (
        <tr>
            <td>
                <a href="/"><img src={item.img[0]} alt="img" /></a>
            </td>
            <td><Link to={`/product/${item.name}-${to_slug(item.name)}/${item.id}`}>
                <strong>{item.type.description} {item.name}</strong>
            </Link></td>
            <td><div className='input' >
                <input type="number" value={item.sll} data-index={index} onChange={handleCart.handleOnchangeInputSll} />
            </div></td>
            <td className='total-price'><span>{Number(totalItem).toLocaleString('vi-VN')}</span></td>
            <td className='delete'><button className='btn-delete' data-delete={index} onClick={handleCart.handleDeleteItemCart}><FaRegTrashAlt /></button></td>
        </tr>
    );
}

export default CartItem;