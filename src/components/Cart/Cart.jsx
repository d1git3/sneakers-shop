import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import MainButton from '../ui/MainButton';
import CartList from '../CartList';
import Summary from '../Summary';
import Alert from '../Alert';
import { useOrders } from '../../context/OrdersContext';

const Cart = () => {
  const { setCartVisibility, cartItems, removeFromCart } = useCart();
  const { createOrder } = useOrders();

  const cartItemsSum = cartItems.reduce((sum, item) => item.price + sum, 0);
  const discount = -Math.round(cartItemsSum * 0.05);
  const total = cartItemsSum - discount;

  const [ isOrderCreated, setIsOrderCreated ] = useState(false);


  const handleOrderCreation = async () => {
    const response = await createOrder(cartItems);
    setIsOrderCreated(response);
    cartItems.forEach(item => removeFromCart(item));
  }

  return (
    <div className="cart-overlay" onClick={() => setCartVisibility(false)}>
      <div 
        className={"cart-overlay__content cart" + (cartItems.length <= 0 ? " cart--empty" : "")} 
        onClick={e => e.stopPropagation()}
      >
        <h2 className="cart__heading">Корзина</h2>
        {isOrderCreated
          ? (
            <Alert
              title="Заказ оформлен!"
              description="Ваш заказ будет передан курьерской доставке"
              imageURI="/images/successful-order.png"
              imageSize={70}
              onClick={() => setCartVisibility(false)}
            />
          )
          : cartItems.length > 0
            ? (
              <>
                <CartList />
                <Summary items={[
                  {label: "Сумма:", value: cartItemsSum},
                  {label: "Скидка 5%:", value: discount},
                  {label: "Итого:", value: total}
                ]}/>
                <MainButton onClick={handleOrderCreation}>
                  Оформить заказ
                </MainButton>
              </>
            )
            : <Alert
                title="Корзина пустая"
                description="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
                imageURI="/images/empty-cart.png"
                imageSize={120}
                onClick={() => setCartVisibility(false)}
              />}
      </div>
    </div>
  );
};

export default Cart;
