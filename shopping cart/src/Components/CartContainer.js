import React from 'react';
import CartItem from './CartItem';
import { useGlobalContext } from './Contexts/Context';

const CartContainer = () => {
    const { cart, total, clearCart } = useGlobalContext()
    // console.log(cart)

    if (cart.length === 0) {
        return (
            <section className='cart'>
                <header>
                    <h2>My cart</h2>
                    <h4 className='empty-cart'>
                        No selected products in cart
                    </h4>
                </header>
            </section>
        )
    }
    return (
        <section className='cart'>
            <header>
                <h2>My cart</h2>
            </header>
            <div>
                {cart.map((item, i) => {
                    return <CartItem key={i} item={item}/>
                })}
            </div>
            <footer>
                <hr />
                <div className='cart-total'>
                    <h4>Total Price<span>${total.toFixed(2)}</span></h4>
                </div>
                <button className='btn clear-btn'
                        onClick={clearCart}>Empty Cart</button>
            </footer>
       </section>
    )
}

export default CartContainer;
