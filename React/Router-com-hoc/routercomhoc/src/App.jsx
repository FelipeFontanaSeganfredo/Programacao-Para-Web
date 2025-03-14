import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MenuPublico from './MenuPublico';
import Home from './Home';
import MenuPrivado from './MenuPrivado';
import Usuario from './Usuario'; // Certifique-se de que o caminho está correto

const router = createBrowserRouter([
  {
    path: '/',
    element: <MenuPublico/>,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: 'usuario',
        element: <Usuario/>,
      },
    ],
  },
  {
    path: 'privado',
    element: <MenuPrivado/>,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: 'usuario',
        element: <Usuario/>,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
