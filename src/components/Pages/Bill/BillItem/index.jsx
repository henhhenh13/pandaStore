import React from 'react';
import { Link } from 'react-router-dom';
import { to_slug } from '../../../../lib/toSlug'


function BillItem({ item }) {
    const totalItem = Number(item.oldPrice * item.sll);

    return (
        <tr>
            <td>
                <a href="/"><img src={item.img[0]} alt="img" /></a>
            </td>
            <td>
                <Link to={`/product/${item.name}-${to_slug(item.name)}/${item.id}`}>
                    <strong>{item.type.description} {item.name}</strong>
                </Link>
            </td>
            <td>
                <span>{item.sll}</span>
            </td>
            <td className='total-price'>
                <span>{Number(totalItem).toLocaleString('vi-VN')}</span>
            </td>
        </tr>
    );
}

export default BillItem;