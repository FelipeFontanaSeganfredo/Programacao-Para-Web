import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Menu from './Menu'
import NotFound from './NotFound';
import Sobre from './Sobre';
import Rotas from './Rotas';


const router = createBrowserRouter(
  [
    {
      path : "/",
      element : <Menu/>,
      children: [
        {
          index : true,
          element : <Home/>
        },
        {
          path : "rotas",
          element : <Rotas/>
        },
        {
          path : "rotas/:id",
          element : <Rotas/>
        },
        {
          path : "sobre",
          element : <Sobre/>
        },
        {
          path : "*",
          element : <NotFound/>
        }
      ]
    }
  ]
)

function App() {
  return (
    <RouterProvider router = {router}/>
  );
}

export default App;
