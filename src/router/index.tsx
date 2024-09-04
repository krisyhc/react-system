import Home from '../pages/home/Home'
import Login from "../pages/login/Login"

const routes = [
  {
    path: '/',
    element:<Home/>,
  },
  {
    path: '/login',
    element:<Login/>,
  },
  {
    path: '*',
    element: <h2>404</h2>
  }
]

export default routes