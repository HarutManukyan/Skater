import { useState } from "react";
import { useParams } from "react-router";

import { setUser, userSelector } from "../redux/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

import { skateboardsList, addToCart, users, getUsers } from "../db/db";

function Skate() {
  const [finalCart, setFinalCart] = useState([]);
  const [showAbout, setShowAbout] = useState(true);
  const [showPolicy, setShowPolicy] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const { skateId } = useParams();
  const user = useSelector(userSelector);
  const dispatch = useDispatch();

  let skate = skateboardsList.filter((item) => item.id == skateId).at(0);

  const addSkate = () => {
    let userData = users.find((item) => item.id === user.id);
    let dublicateIndex = userData.cart.findIndex(
      (item) => skate.id === item.id
    );

    if (dublicateIndex === -1) {
      getUsers();
      let skateInfo = { quantity, ...skate };
      let finalCart = [...userData.cart, skateInfo];

      addToCart(user.id, finalCart);
      dispatch(setUser({ ...user, cart: [...user.cart, skateInfo] }));
      toast.success("Скейт добавлен в корзину.");
    } else {
      getUsers();
      setFinalCart((prevFinalCart) => {
        const updatedCart = userData.cart.map((item, index) => {
          if (index === dublicateIndex) {
            return { ...item, quantity: item.quantity + quantity };
          }
          return item;
        });

        addToCart(user.id, updatedCart);

        dispatch(setUser({ ...user, cart: updatedCart }));
      });
      toast.success("Скейт добавлен в корзину.");
    }
  };

  return (
    <div className="skate">
      <Toaster position="top-center" reverseOrder={true} />
      <div className="skate__img-container">
        <img className="skate__img" alt="skateboard" src={skate.img} />
      </div>
      <div className="skate__content">
        <h2 className="skate__name">скейтборд</h2>
        <p className="skate__price">{skate.price} ₽</p>
        <div className="skate__quantity-container">
          <input
            onChange={(e) => setQuantity(+e.target.value)}
            className="skate__quantity"
            type="number"
            defaultValue={"1"}
          />
        </div>
        <div className="skate__btn-container">
          <button onClick={addSkate} className="skate__btn">
            Добавить в корзину
          </button>
        </div>
        <h4
          onClick={() => setShowAbout((about) => !about)}
          className="skate__about-title"
        >
          О товаре
        </h4>
        {showAbout && (
          <p className="skate__about-text">
            Это информация о товаре. Расскажите подробно, что он из себя
            представляет, и перечислите всю необходимую информацию: размеры,
            материалы, инструкции по уходу и т. д. Это также хорошая возможность
            сообщить, в чем особенность вашей продукции и какую выгоду
            покупатели получат в итоге. Подробные сведения о товаре помогут
            вашим посетителям определиться с покупкой.
          </p>
        )}
        <h4
          onClick={() => setShowPolicy((policy) => !policy)}
          className="skate__policy-title"
        >
          Политика возврата
        </h4>
        {showPolicy && (
          <p className="skate__policy-text">
            Это правила и условия возврата товара и денег. Расскажите
            посетителям, что нужно сделать, если они захотят вернуть товар и
            получить назад свои деньги. Четкая и ясная политика возврата — это
            хороший способ построить доверительные отношения с клиентами.
          </p>
        )}
      </div>
    </div>
  );
}

export default Skate;
