import { GiSkateboard } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";

import { setLogedIn, setUser } from "../redux/slices/userSlice";

import { users, getUsers } from "../db/db";
import { useEffect } from "react";

function SignIn() {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    getUsers();
  }, []);

  const logIn = ({ username, password }) => {
    const user = users.find(
      (user) =>
        user.username.toLowerCase() === username.toLowerCase() &&
        user.password.toLowerCase() === password.toLowerCase()
    );

    if (user) {
      dispatch(setLogedIn(true));
      dispatch(setUser(user));
      toast.success("You loged in");
      navigate("/");
    } else {
      toast.error("wrong data");
    }
  };

  return (
    <div className="auth">
      <Toaster position="top-center" reverseOrder={false} />
      <h1 className="auth__title">Войти</h1>
      <form onSubmit={handleSubmit(logIn)} className="auth__form">
        <label className="auth__label">узернейм</label>
        <input
          placeholder="узернейм"
          className="auth__input auth__username"
          type="text"
          {...register("username", { required: true })}
        />
        <label className="auth__label">пароль</label>
        <input
          placeholder="пароль"
          className="auth__input auth__password"
          type="text"
          {...register("password", { required: true })}
        />
        <div className="auth__btn-container">
          <button type="submit" className="auth__btn">
            войти
          </button>
        </div>
      </form>
      <p className="auth__redirect">
        Ещё нет аккаунта? <Link to={"/sign-up"}>Зарегистрируйся!</Link>
      </p>
      <GiSkateboard className="auth__icon--1" />
      <GiSkateboard className="auth__icon--2" />
    </div>
  );
}

export default SignIn;
