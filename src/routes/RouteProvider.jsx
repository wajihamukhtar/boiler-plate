import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './paths';
import NotFound from '../notfound/index';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';

const AppRoutes = ({ _publicRoutes, _privateRoutes }) => {
  let routes = useRoutes([
    {
      element: <PublicRoutes />,
      children: _publicRoutes,
    },
    { element: <PrivateRoutes />, children: _privateRoutes },
    { path: '*', element: <NotFound /> },
  ]);
  return routes;
};
const RouteProvider = () => {
  const _publicRoutes = publicRoutes;
  const _privateRoutes = privateRoutes;

  return (
    <Router>
      <AppRoutes
        _privateRoutes={_privateRoutes}
        _publicRoutes={_publicRoutes}
      />
    </Router>
  );
};
export default RouteProvider;