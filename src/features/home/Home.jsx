import SidebarLeft from "./components/sidebars/SidebarLeft";
import SidebarRight from "./components/sidebars/SidebarRight";
import Feed from "./components/feed/Feed";
import { useSelector } from "react-redux";

function Home() {
  const user = useSelector((state) => state.user);

  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          <SidebarLeft user={user}></SidebarLeft>
        </div>
        <div className="col-6">
          <Feed></Feed>
        </div>
        <div className="col-4">
          <SidebarRight></SidebarRight>
        </div>
      </div>
    </div>
  );
}

export default Home;
