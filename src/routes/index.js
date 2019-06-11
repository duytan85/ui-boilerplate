import Root from '../containers/Root';

export const routes = [
  {
    id: 'root',
    path: '/',
    component: Root
  }
];

// -------------------------------------------------
// HELPERS
// -------------------------------------------------
export const getRouteId = (routeId) => routes.find((o) => o.id === routeId).id;
export const getRoutePath = (routeName) =>
  routes.find((o) => o.id === routeName).path;
export const getRouteComponent = (routeComponent) =>
  routes.find((o) => o.id === routeComponent).component;
