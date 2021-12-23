
function CheckoutItem({ item }) {
    return (
        <div className="items mb-3">
            <div className="row justify-content-between">
                <div className=" col-3">
                    <div className="img">
                        <img src={item.img[0]} alt="img" />
                        <div className="sll">{item.sll}</div>
                    </div>
                </div>
                <p className="text col-6">
                    Cổng chuyển Hyperdrive Dual 4k HDMI USB-C hub for Macbook M1 (HDM1)
                </p>
                <p className="price col-3 text-right">{item.totalItem.toLocaleString('vi-VN')}<span>đ</span></p>
            </div>
        </div>
    );
}

export default CheckoutItem;