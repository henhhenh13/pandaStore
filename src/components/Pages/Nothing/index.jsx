import { Link } from 'react-router-dom';
import Footer from '../../Footer';
import Header from '../../Header';
import './Nothing.scss'

function Nothing(props) {
    return (
        <div >
            <Header />
            <div className="nothing-page">
                <h1>404</h1>
                <h2>Trang web này không có mời bạn quay về trang chủ</h2>
                <Link to='/'>PandaStore</Link>
            </div>
            <Footer />
        </div>
    );
}

export default Nothing;