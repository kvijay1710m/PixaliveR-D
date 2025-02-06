import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import CursorFollower from "./components/CursorFollower/CursorFollower";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <>
<ScrollToTop/>      
      <nav>
        <Header />
      </nav>
      <main className="relative">
        <CursorFollower />
        <Outlet />
      </main>
    </>
  );
}

export default App;
