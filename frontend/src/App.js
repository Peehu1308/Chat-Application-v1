import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";
import './App.css';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Signup from './components/Signup';

// Configure axios globally
axios.defaults.withCredentials = true;

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>
  },
  {
    path: '/signup',
    element: <Signup/>
  },
  {
    path: "/login",
    element: <Login/>
  }
])
function App() {
  return (
    <div className="p-4 h-screen w-screen items-center bg-red-400">

  <RouterProvider router={router}/>



    </div>
  );
}

export default App;
