import { useState } from "react";
import { Articles } from "./components/pages/Articles";
import { CreateArticle } from "./components/pages/CreateArticle";
import { Home } from "./components/pages/Home";
import { CustomRoutes } from "./routing/CustomRoutes";

function App() {
  return <div className="layout">
    <CustomRoutes />
  </div>;
}

export default App;
