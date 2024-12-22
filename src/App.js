import './App.css';
import About from './About';
import Contact from './Contact';
import AppLayout from './AppLayout';
import Error from './Error';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './Home';
import './Home.css';

function App() {
  const router=createBrowserRouter([
      {
            path:"/",
            element:<AppLayout />,
            errorElement:<Error />,
            children:[
                  {
                        path:"/",
                        element:<Home />
                  },
                  {
                        path: "/about",
                        element:<About />
                  },
                  {
                        path: "/contact",
                        element:<Contact />
                  }
            ]

      },
  ])
  return <RouterProvider router={ router }/>
};

export default App;