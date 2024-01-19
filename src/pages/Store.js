import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { logedInSelector } from "../redux/slices/userSlice";
import toast, { Toaster } from "react-hot-toast";

import { skateboardsList } from "../db/db";

function Store() {
  const isLogedIn = useSelector(logedInSelector);
  const navigate = useNavigate();

  const skateboards = skateboardsList.filter(
    (skate) => skate.type === "skateboard"
  );

  const longboards = skateboardsList.filter(
    (skate) => skate.type === "longboard"
  );

  return (
    <div className="store">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="store__skates-container">
        <h2 className="store__title">
          НОВЫЕ <br />
          СКЕЙТ-
          <br />
          БОРДЫ
        </h2>
        <ul className="store__skates">
          {skateboards.map((skate) => (
            <Link
              onClick={() =>
                isLogedIn
                  ? navigate(`/skate/${skate.id}`)
                  : toast.error("Нужно войти в аккаунт.")
              }
              key={skate.id}
              className="store__skates-item"
            >
              <div className="store__skates-img-container">
                <img
                  className="store__skates-img"
                  alt="skateboard"
                  src={skate.img}
                />
              </div>
              <h3 className="store__skates-name">Скейтборд</h3>
              <p className="store__skates-price">{skate.price} ₽</p>
            </Link>
          ))}
        </ul>
      </div>
      <div className="store__skates-container">
        <h2 className="store__title">
          НОВЫЕ
          <br />
          ЛОНГ-
          <br />
          БОРДЫ
        </h2>
        <ul className="store__skates">
          {longboards.map((skate) => (
            <Link
              onClick={() =>
                isLogedIn
                  ? navigate(`/skate/${skate.id}`)
                  : toast.error("Нужно войти в аккаунт.")
              }
              key={skate.id}
              className="store__skates-item"
            >
              <div className="store__skates-img-container">
                <img
                  className="store__skates-img"
                  alt="skateboard"
                  src={skate.img}
                />
              </div>
              <h3 className="store__skates-name">Скейтборд</h3>
              <p className="store__skates-price">{skate.price} ₽</p>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Store;
