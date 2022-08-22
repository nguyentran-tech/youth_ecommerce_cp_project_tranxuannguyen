import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import { runRealisticLook } from '../lib/utils';

const Success = () => {
    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runRealisticLook();
    }, []);

    return (
    <div className="success-wrapper">
        <div className="success">
            <p className="icon"><BsBagCheckFill /></p>
            <h2>Thank you for shopping with YOUTH!</h2>
            <p className="email-msg">Check Your Email Inbox For The Order Receipt.</p>
            <p className="description">
                If you have any further questions, please email
                <a className="email" href="mailto:youthstore@gmail.com">youthstore@gmail.com</a>
            </p>
            <Link href="/">
                <button type="button" width="300px" className="btn">
                    Continue Shopping
                </button>
            </Link>
        </div>
    </div>
    )
}

export default Success