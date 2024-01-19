import HomeConect from "./HomeConnect";
import HomeHistory from "./HomeHistory";
import HomeNew from "./HomeNew";
import HomeTop from "./HomeTop";

function Homepage() {
  return (
    <div>
      <HomeTop />
      <HomeNew />
      <HomeHistory />
      <HomeConect />
    </div>
  );
}

export default Homepage;
