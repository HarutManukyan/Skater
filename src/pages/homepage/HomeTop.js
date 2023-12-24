import { Link } from "react-router-dom";

function HomeTop() {
  return (
    <div className="homepage__top-container">
      <div className="homepage__top">
        <h2 className="homepage__top-title">
          КОРОЛИ <br />
          <span>
            ВСЕХ
            <br />
            ДОРОГ
          </span>
        </h2>
        <div className="homepage__top-btn-container">
          <Link to={"/store"} className="homepage__top-btn">
            купить
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeTop;
