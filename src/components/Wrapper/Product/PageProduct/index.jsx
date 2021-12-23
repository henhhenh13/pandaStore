
import { useState } from 'react';

import { Pagination } from 'react-bootstrap'
import Item from '../Item'
import './PageProduct.scss';
import { useEffect } from 'react';


function PageProduct({ data, type }) {
    const [dataItems, setDataItems] = useState()
    const [pageSetting, setPageSeting] = useState({
        _page: 1,
        _limit: 10,
        sumPage: function () {
            return this._limit * this._page
        }
    })
    const dataFilter = data.filter((item) => {
        return item.type.name === type.name
    })
    let items = [];
    for (let number = 1; number <= Math.ceil(dataFilter.length / pageSetting._limit); number++) {
        items.push(
            <Pagination.Item
                data-value={number} key={number} active={number === pageSetting._page}
            >
                {number}
            </Pagination.Item >,
        );
    }

    useEffect(() => {
        const checkFilter = data.filter((item) => {
            return item.type.name === type.name
        })
        const check = checkFilter.length;
        const newDataItems = []
        if (pageSetting._page > 1) {
            if (check > pageSetting._limit) {
                for (let i = pageSetting.sumPage() - 10; i < check; i++) {
                    newDataItems.push(checkFilter[i])
                }
            }
            setDataItems(newDataItems)
        }
        if (pageSetting._page === 1) {
            if (check > pageSetting._limit) {
                for (let i = pageSetting.sumPage() - 10; i < 10; i++) {
                    newDataItems.push(checkFilter[i])
                }
            } else {
                for (let i = pageSetting.sumPage() - 10; i < check; i++) {
                    newDataItems.push(checkFilter[i])
                }
            }
            setDataItems(newDataItems)
        }
    }, [pageSetting, data, type.name])

    function handleChangePage(e) {
        const newPage = Number(e.target.dataset.value);
        setPageSeting({
            ...pageSetting,
            _page: newPage
        });
    }

    return (
        <div className="page-product container px-lg-4 px-0">
            {dataItems &&
                <div>
                    <div className="ribbons container d-flex justify-content-between align-items-center">
                        <h3 className="title">{type.description} - MIỄN PHÍ GIAO HÀNG TOÀN QUỐC</h3>
                    </div>
                    <div className="row">
                        {
                            dataItems.map((item) => (
                                <Item key={item.id} item={item} />
                            ))
                        }
                    </div>
                    <div>
                        <Pagination className='d-flex justify-content-center' size="lg" onClick={handleChangePage}>
                            {items.length > 1 && items}
                        </Pagination>
                        <br />
                    </div>
                </div>
            }

        </div>
    );
}

export default PageProduct;