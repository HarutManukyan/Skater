import { Link } from "react-router-dom";

function HomeConect() {
  return (
    <div className="homepage__connect">
      <div className="homepage__connect-img-conatiner">
        <img
          alt="skateboard"
          src="https://static.wixstatic.com/media/1e47b2_0d3ae44559a247448aa8801a7bad9f48.jpg/v1/fill/w_1903,h_387,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1e47b2_0d3ae44559a247448aa8801a7bad9f48.jpg"
          className="homepage__connect-img"
        />
      </div>
      <Link to={"/clients"} className="homepage__connect-title">
        связаться
      </Link>
    </div>
  );
}

export default HomeConect;
