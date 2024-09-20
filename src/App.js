

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import Main from './Main/Main';
import Services from './component/Services/Services';
import Login from './component/Login/Login';
import ContactUs from './component/ContactUs/ContactUs';
import SignUp from './component/SignUp/SignUp';
import Projects from './component/Projects/Projects';
import ProjectDetails from './component/ProjectDetails/ProjectDetails';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path:'/',
          element:<Home></Home>
        },
        
        {
          path:'home',
          element:<Home></Home>
        },
        {
          path:'services',
          element:<Services></Services>
        },
        {
          path:'contact',
          element:<ContactUs></ContactUs>
        },
        {
          path:'projects',
          element: <Projects></Projects>
        },
        {
          path:'projects/:id',
          element: <ProjectDetails></ProjectDetails>,
        },
        
      ]
    },
    {
      path:'login',
      element:<Login></Login>
    },
    {
      path:'register',
      element:<SignUp></SignUp>
    },
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
