import React from "react";
import '../styles/Order.scss';

const Order = () => {
    return (
        <div class="shopping-cart">
            <figure>
                    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
            </figure>
            <p>Bike</p>
            <p>$30,00</p>
            <img src="./icons/icon_close.png" alt="close" />
        </div>
    );
}

export default Order;:root {
    --white: #FFFFFF;
    --black: #000000;
    --very-light-pink: #C7C7C7;
    --text-input-field: #f3e8e8;
    --hospital-green: #ACD9B2;
    --sm: 14px;
    --md: 16px;
    --lg: 18px;
}