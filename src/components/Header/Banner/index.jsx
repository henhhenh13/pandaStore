import React from 'react';

const bannerStyle = {
    width: "100%",
    height: "100%"
}

function Banner(props) {
    const bannerNumber = [1, 2, 3];
    const number = Math.floor(Math.random() * (bannerNumber.length))

    return (
        <div style={{ height: "50px" }} className="banner">
            <img
                src={process.env.PUBLIC_URL + `/images/banner/bn-top${number + 1}.webp`}
                alt=""
                className="banner-img"
                style={bannerStyle}
            />
        </div>
    );
}

export default React.memo(Banner);