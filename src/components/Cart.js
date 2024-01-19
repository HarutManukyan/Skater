import { useDispatch, useSelector } from "react-redux";

import {
  logedInSelector,
  setUser,
  userSelector,
} from "../redux/slices/userSlice";
import { useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";

import { deleteFromCart } from "../db/db";

function Cart({ setShowCart, showCart }) {
  const [update, setUpdate] = useState(0);

  let user = useSelector(userSelector);
  const isLogedIn = useSelector(logedInSelector);
  const [cartIsEmpty, setCartIsEmpty] = useState(user.cart);

  const ref = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target))
        setShowCart((cart) => !cart);
    }

    document.addEventListener("click", handleClick, true);

    return () => document.removeEventListener("click", handleClick, true);
  }, [setShowCart]);

  const deleteItem = (id) => {
    let userCart = user.cart.filter((item) => item.id !== id);

    deleteFromCart(user.id, userCart);
    dispatch(setUser({ ...user, cart: userCart }));
    setUpdate(update + 1);

    if (userCart.cart) {
      setCartIsEmpty(false);
    } else {
      setCartIsEmpty(true);
    }
  };

  const totalPrice = user.cart?.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <div ref={ref} className="cart">
      <h2 className="cart__title">Корзина</h2>
      {cartIsEmpty && isLogedIn ? (
        <div className="cart__container">
          {user.cart.map(({ quantity, id, img, price, type }) => (
            <div key={id} className="cart__item">
              <div className="cart__img-container" key={id}>
                <img className="cart__img" src={img} alt="skate" />
              </div>
              <div className="cart__item-content">
                <h4 className="cart__item-name">{type}</h4>
                <p className="cart__item-price">Цена: {price} ₽</p>
                <p className="cart__item-quantity">Количество: {quantity}</p>
              </div>
              <IoClose
                onClick={() => deleteItem(id)}
                className="cart__delete"
              />
            </div>
          ))}
        </div>
      ) : (
        <h3 className="cart__empty">Корзина пуста</h3>
      )}
      <div className="cart__total-price">Цена: {totalPrice} ₽</div>
    </div>
  );
}

export default Cart;
