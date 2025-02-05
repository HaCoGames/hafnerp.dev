import TopNavBar from "./components/TopNavBar/TopNavBar";

import './App.css'
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <main className="dark:bg-slate-950 dark:bg-opacity-85">
      <div className="div-main">
        <TopNavBar />
        <Outlet />
      </div>
      <div className="app-footer border-t-2 border-b-neutral-300 dark:border-b-white dark:bg-black dark:bg-opacity-30">
        <Footer />
      </div>
    </main>
  );
}

export default App;
