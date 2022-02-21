import Footer from "./layout/footer/Footer";
import Header from "./layout/header/Header";
import Main from "./layout/main/Main";
import Menu from "./layout/menu/Menu";
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Main />
      <Footer />

      {/* <h1>Moshe</h1> */}
      {/* <Page404/>
      <Page404 msg='Ofir Not Found......'/> */}
    </div>
  );
}

export default App;