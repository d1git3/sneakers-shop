import React from 'react';
import { useOrders } from '../../context/OrdersContext';
import OrdersList from '../OrdersList';
import Alert from '../Alert';
import { useNavigate } from 'react-router-dom';

const SectionOrders = () => {
  const { ordersItems } = useOrders();
  const navigate = useNavigate();

  return (
    <section className="sneakers container">
      {ordersItems.length > 0
        ? (
          <>
            <div className="sneakers__header">
              <h1 className="sneakers__heading">
                Мои покупки
              </h1>
            </div>
            <OrdersList items={ordersItems} />
          </>
        )
        : <Alert
            title="У вас нет заказов :("
            description="Оформите хотя бы один, пожалуйста"
            imageURI="/images/empty-orders.png"
            imageSize={70}
            onClick={() => navigate("/")}
          />}
    </section>
  );
};

export default SectionOrders;
