import TopNavBar from "./components/TopNavBar/TopNavBar";

import './App.css'
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <main className="dark:bg-gray-800">
      <div className="div-main">
        <TopNavBar />
        <Outlet />
      </div>
      <div className="app-footer border-t text-black">
        <Footer />
      </div>
    </main>
  );
}

export default App;
