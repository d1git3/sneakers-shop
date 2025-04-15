import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {
  const [ ordersItems, setOrdersItems ] = useState([]);
  const [ toUpdate, setToUpdate ] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3000/orders")
      .then(response => {
        const formatedOrders = [];
        response.data.forEach(order => {
          let {id, ...items} = order
          items = Object.values(items)
          formatedOrders.push({id, items})
        })
        setOrdersItems([...formatedOrders])
      })
  }, [toUpdate])

  const createOrder = async (items) => {
    try {
      await axios.post("http://localhost:3000/orders", items);
      console.log(items)
      setOrdersItems(prevItems => [...prevItems, ...items]);
      setToUpdate(prev => !prev)
      return true;
    } catch (error) {
      alert("Не удалось сделать заказ!")
      return false;
    }
  }

  return (
    <OrdersContext.Provider value={{
      ordersItems,
      createOrder
    }}>
      {children}
    </OrdersContext.Provider>
  )
}

export const useOrders = () => useContext(OrdersContext);