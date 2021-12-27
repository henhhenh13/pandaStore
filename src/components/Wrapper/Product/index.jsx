import { useEffect, useState } from 'react';
import CarouselProduct from './CarouselProduct';
import PageProduct from './PageProduct';
import { FiLoader } from 'react-icons/fi';
import './Product.scss';


function Product(props) {
    const [homePage, setHomePage] = useState();
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch(`https://json-server-panda.herokuapp.com/homePage`)
            .then(res => res.json())
            .then(data => {
                setHomePage(data)
            })
        fetch(`https://json-server-panda.herokuapp.com/product`)
            .then(res => res.json())
            .then(data => {
                setData(data);
                setLoading(true);
            })
    }, []);

    return (
        <div className="product">
            {
                homePage && data &&
                <div>
                    <CarouselProduct data={data} type={"pcGearvn"} />
                    {
                        homePage.map((item, index) => (
                            <PageProduct key={index} data={data} type={item} />
                        ))
                    }
                </div>
            }
            <div className={`loading ${!loading ? 'show' : ''}`}><span><FiLoader /></span></div>

        </div>
    );
}

export default Product;