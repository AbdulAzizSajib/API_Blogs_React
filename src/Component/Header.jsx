import profile from "../assets/images/profile.png";
import { BsFillCupHotFill } from "react-icons/bs";
const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <h1 className="text-3xl">Knowledge Cafe</h1>
        <div className="text-3xl">
          <BsFillCupHotFill />
        </div>
      </div>
      <div>
        <img src={profile} alt="" />
      </div>
    </div>
  );
};

export default Header;
