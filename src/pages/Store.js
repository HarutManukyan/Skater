import { useEffect, useState } from "react";

import instance from "../services/axios/axios";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { logedInSelector } from "../redux/slices/userSlice";
import toast, { Toaster } from "react-hot-toast";

function Store() {
  const [skates, setSkates] = useState([]);

  const isLogedIn = useSelector(logedInSelector);
  const navigate = useNavigate();

  useEffect(() => {
    instance
      .get("skateboards")
      .then((res) => setSkates(res.data))
      .catch((err) => console.log(err));
  }, []);

  const skateboards = skates.filter((skate) => skate.type === "skateboard");

  const longboard = skates.filter((skate) => skate.type === "longboard");

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
          {longboard.map((skate) => (
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
