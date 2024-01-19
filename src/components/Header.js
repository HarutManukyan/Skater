import { Link, NavLink } from "react-router-dom";
import { IoCart } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import {
  logedInSelector,
  setLogedIn,
  userSelector,
} from "../redux/slices/userSlice";
import { IoMenu } from "react-icons/io5";

import Cart from "./Cart";
import { useState } from "react";

function Header() {
  const [showCart, setShowCart] = useState(false);
  const [openHeader, setOpenHeader] = useState(false);
  const [animation, setAnimation] = useState(false);

  const width = window.outerWidth;

  const isLogedIn = useSelector(logedInSelector);
  const user = useSelector(userSelector);

  const dispatch = useDispatch();

  if (width < 900)
    return (
      <header className="header">
        <div className="header__logo-container">
          <Link to="/" className="header__logo">
            <span>с</span>кейтер
          </Link>
        </div>
        {openHeader ? (
          <div className={animation ? "menu menu__in" : "menu menu__out"}>
            <ul className="menu__list">
              <li className="menu__list-item">
                <NavLink
                  onClick={() => {
                    setAnimation((anim) => !anim);
                    setTimeout(() => {
                      setOpenHeader((header) => !header);
                    }, 200);
                  }}
                  to={"/"}
                >
                  главная
                </NavLink>
              </li>
              <li className="menu__list-item">
                <NavLink
                  onClick={() => {
                    setAnimation((anim) => !anim);
                    setTimeout(() => {
                      setOpenHeader((header) => !header);
                    }, 200);
                  }}
                  to={"store"}
                >
                  магазин
                </NavLink>
              </li>
              <li className="menu__list-item">
                <NavLink
                  onClick={() => {
                    setAnimation((anim) => !anim);
                    setTimeout(() => {
                      setOpenHeader((header) => !header);
                    }, 200);
                  }}
                  to={"history"}
                >
                  наша история
                </NavLink>
              </li>
              <li className="menu__list-item">
                <NavLink
                  onClick={() => {
                    setAnimation((anim) => !anim);
                    setTimeout(() => {
                      setOpenHeader((header) => !header);
                    }, 200);
                  }}
                  to={"clients"}
                >
                  обслуживание клиентов
                </NavLink>
              </li>
            </ul>
            <div className="menu__customer">
              <div className="menu__cart-container">
                <IoCart
                  onClick={() => {
                    setAnimation((anim) => !anim);
                    setTimeout(() => {
                      setOpenHeader((header) => !header);
                    }, 200);
                    setTimeout(() => {
                      setShowCart((cart) => !cart);
                    }, 400);
                  }}
                  className="menu__cart"
                />
              </div>
              <Link
                onClick={() => {
                  dispatch(setLogedIn(false));
                  setAnimation((anim) => !anim);
                  setTimeout(() => {
                    setOpenHeader((header) => !header);
                  }, 200);
                }}
                to={"/sign-in"}
                className="menu__user-container"
              >
                <FaCircleUser className="menu__user" />
                <div>{isLogedIn ? user.username : "Войти"}</div>
              </Link>
            </div>
          </div>
        ) : (
          <div className="header__menu">
            <IoMenu
              onClick={() => {
                setAnimation((anim) => !anim);
                setTimeout(() => {
                  setOpenHeader((header) => !header);
                }, 200);
              }}
              className="header__menu-icon"
            />
          </div>
        )}
        {showCart && <Cart setShowCart={setShowCart} showCart={showCart} />}
      </header>
    );

  return (
    <div>
      <header className="header">
        <div className="header__logo-container">
          <Link to="/" className="header__logo">
            <span>с</span>кейтер
          </Link>
        </div>
        <ul className="header__list">
          <li className="header__list-item">
            <NavLink to={"/"}>главная</NavLink>
          </li>
          <li className="header__list-item">
            <NavLink to={"store"}>магазин</NavLink>
          </li>
          <li className="header__list-item">
            <NavLink to={"history"}>наша история</NavLink>
          </li>
          <li className="header__list-item">
            <NavLink to={"clients"}>обслуживание клиентов</NavLink>
          </li>
        </ul>
        <div className="header__customer">
          <div className="header__cart-container">
            <IoCart
              onClick={() => setShowCart((cart) => !cart)}
              className="header__cart"
            />
          </div>
          <Link
            onClick={() => {
              dispatch(setLogedIn(false));
            }}
            to={"/sign-in"}
            className="header__user-container"
          >
            <FaCircleUser className="header__user" />
            <div>{isLogedIn ? user.username : "Войти"}</div>
          </Link>
        </div>
      </header>
      {showCart && <Cart setShowCart={setShowCart} showCart={showCart} />}
    </div>
  );
}

export default Header;
