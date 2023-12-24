import { Link, useNavigate } from "react-router-dom";
import { GiSkateboard } from "react-icons/gi";
import { useForm } from "react-hook-form";
import instance from "../services/axios/axios";
import { useDispatch } from "react-redux";
import { setLogedIn, setUser } from "../redux/slices/userSlice";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function SignUp() {
  const [users, setUsers] = useState([]);

  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signUp = ({ username, email, password }) => {
    instance
      .get("users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));

    const isNew = users.map((user) => {
      return user.username === username || user.email === email;
    })[0];

    if (!isNew) {
      const newUser = {
        username,
        email,
        password,
        cart: [],
      };

      instance.post("users", newUser).catch((err) => console.log(err));

      dispatch(setLogedIn(true));
      dispatch(setUser(newUser));
      navigate("/");
    } else {
      toast.error("Узернейм или эл почта уже зарегистрированы или заняты.");
    }
  };

  return (
    <div className="auth">
      <Toaster position="top-center" />
      <h1 className="auth__title">Зарегистрироваться</h1>
      <form onSubmit={handleSubmit(signUp)} className="auth__form">
        <label className="auth__label">узернейм</label>
        <input
          placeholder="узернейм"
          className="auth__input auth__username"
          type="text"
          {...register("username", { required: true })}
        />
        <label className="auth__label">эл. почта</label>
        <input
          placeholder="пароль"
          className="auth__input auth__password"
          type="text"
          {...register("email", { required: true })}
        />
        <label className="auth__label">пароль</label>
        <input
          placeholder="password"
          className="auth__input auth__password"
          type="text"
          {...register("password", { required: true })}
        />
        <div className="auth__btn-container">
          <button type="submit" className="auth__btn">
            Зарегистрироваться
          </button>
        </div>
      </form>
      <p className="auth__redirect">
        Уже есть аккаунт? <Link to={"/sign-in"}>Войди!</Link>
      </p>
      <GiSkateboard className="auth__icon--1" />
      <GiSkateboard className="auth__icon--2" />
    </div>
  );
}

export default SignUp;
