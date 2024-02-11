import React, { useContext, useState } from "react";
import Header from "./header/Header";
import NewsItems from "./news/NewsItems";
import Footer from "./Footer";
import newsContext from "./contexts/newsContext";
import useNewsQuery from "./hooks/useNewsQuery";


export default function App() {
  const [newses, setNewses] = useState(null);
  return (
    <div>
      <newsContext.Provider value={{ newses, setNewses }}>
        <Header />
        <NewsItems />
        <Footer />
      </newsContext.Provider>
    </div>
  );
}
