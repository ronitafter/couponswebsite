
import './App.css';
import Footer from './components/layout/footer/Footer';
import Header from './components/layout/header/Header';
import Main from './components/layout/main/Main';
import Menu from './components/layout/menu/Menu';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="mainWrapper">
        <Menu />
        <Main />
      </div>
      <Footer />

      {/* <h1>Moshe</h1> */}
      {/* <Page404/>
      <Page404 msg='Ofir Not Found......'/> */}
    </div>
  );
}

export default App;