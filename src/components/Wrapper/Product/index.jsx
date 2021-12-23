import { useEffect, useState } from 'react';
import CarouselProduct from './CarouselProduct';
import PageProduct from './PageProduct';
import './Product.scss';


function Product(props) {
    const [homePage, setHomePage] = useState();
    const [data, setData] = useState();

    useEffect(() => {
        fetch(`https://json-server-panda.herokuapp.com/homePage`)
            .then(res => res.json())
            .then(data => {
                setHomePage(data)
            })
        fetch(`https://json-server-panda.herokuapp.com/product`)
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    return (
        <div className="product">
            {
                data && homePage &&
                <div>
                    <CarouselProduct data={data} type={"pcGearvn"} />
                    {
                        homePage.map((item, index) => (
                            <PageProduct key={index} data={data} type={item} />
                        ))
                    }

                </div>

            }

        </div>
    );
}

export default Product;