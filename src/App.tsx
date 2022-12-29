import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import 'react-router-dom'
import Login from './components/auth/Login';
import Registration from './components/auth/Registration';
import ErrorPage from './components/error_page/ErrorPage';
import Products from './components/Products';
import Header from './components/Header';
import CreateProduct from './components/CreateProduct';

function App() {
  return (
    <div>
      <Routes>
        <Route element={<ErrorPage/>} path="*" />
        
        <Route path='/' element={<Header/>}>
          <Route element={<CreateProduct/>} path='create-product'></Route>
          <Route element={<Login/>} path="login" />
          <Route element={<Registration/>} path="registration" />
          <Route element={<Products/>} path="products"/>
        </Route>

      </Routes>
    </div>
  );
}

export default App;
