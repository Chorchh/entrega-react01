import { Route, Routes } from "react-router";
import GlobalStyle from "./GlobalStyle/GlobalStyle";
import ToDo from "./pages/ToDo/ToDo";
import PokeApi from "./pages/pokeAPI/PokeApi";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/Store";
import Navbar from "./componentes/navbar/Navbar";

function App() {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/todo" element={<ToDo />} />
            <Route path="/pokeapi" element={<PokeApi />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
