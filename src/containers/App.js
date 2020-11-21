import React from "react";

import "../assets/styles/App.css";

//import Holamundo from '../components/Holamundo';
import Header from "../components/Header";
import { Footer } from "../components/Footer";
import { Search } from "../components/Search";
import { Categorias } from "../components/Categorias";
import { Carusel } from "../components/Carusel";
import { Item } from "../components/Item";
import useInitialState from "../hooks/useInitialState";

const API = "http://localhost:3000/initialState";

const App = () => {
  const videos = useInitialState(API);

  //console.log(videos);

  return (
    <div className="App">
      {/* <Holamundo /> */}
      <Header />
      <Search />
      <Categorias text="Mi lista">
        <Carusel>
          {videos.mylist &&
            videos.mylist.map((i, index) => <Item key={index} {...i} />)}
        </Carusel>
      </Categorias>
      <Categorias text="Tendencias">
        <Carusel>
          {videos.trends &&
            videos.trends.map((i, index) => <Item key={index} {...i} />)}
        </Carusel>
      </Categorias>
      <Categorias text="Cursos">
        <Carusel>
          {videos.originals &&
            videos.originals.map((i, index) => <Item key={index} {...i} />)}
        </Carusel>
      </Categorias>
      <Footer />
    </div>
  );
};

export default App;
