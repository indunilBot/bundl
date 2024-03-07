import FooterB from "../Components/footer";
import Home from "./Home";
import Manage from "./Manage";
import Token from "./Token";

function HomeLayout() {
  return (
    <div>
      <Home />
      <Manage />
      <Token />
    </div>
  );
}

export default HomeLayout;
