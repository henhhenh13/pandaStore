import React from 'react';
import Item from '../../../Wrapper/Product/Item'

function CategoryItem({ data }) {
    return (
        <div className="page-product container px-lg-4 px-0">
            {data &&
                <div>
                    <div className="row m-0">
                        {
                            data.map((item) => (
                                <Item key={item.id} item={item} />
                            ))
                        }
                    </div>
                </div>
            }

        </div>
    );
}

export default CategoryItem;