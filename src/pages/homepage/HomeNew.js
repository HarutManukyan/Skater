import { Link } from "react-router-dom";
import { skateboardsList } from "../../db/db";

const image =
  "https://static.wixstatic.com/media/1e47b2_ab0af0b792c54ff19237dfffef6d1657.png/v1/fill/w_600,h_213,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1e47b2_ab0af0b792c54ff19237dfffef6d1657.png";

function HomeNew() {
  const width = window.outerWidth;

  return (
    <div className="homepage__new">
      <div className="homepage__new-top">
        <div className="homepage__new-texts">
          <h2 className="homepage__new-title">
            <span>НОВЫЕ</span> <br />
            ПОСТУ- <br /> ПЛЕНИЯ
          </h2>
          <div className="homepage__new-btn-container">
            <Link to={"/store"} className="homepage__new-btn">
              смотреть
            </Link>
          </div>
        </div>
        <div className="homepage__new-img-container">
          <img className="homepage__new-img" alt="skateboard" src={image} />
        </div>
      </div>

      <div className="homepage__new-skates">
        {skateboardsList.slice(0, 4).map(({ id, img, type }) => (
          <div key={id} className="homepage__new-skates-img-container">
            {width > 900 && (
              <div className="homepage__new-skates-dark">{type}</div>
            )}
            <img
              className="homepage__new-skates-img"
              src={img}
              alt="skateboard"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeNew;
