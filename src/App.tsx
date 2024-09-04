import routeConfig from './router';
import { useRoutes }  from'react-router-dom';


const App = () => {
  const routes = useRoutes( routeConfig );
  return routes;
};

export default App;