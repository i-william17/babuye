import { useLocation } from 'react-router-dom';

export function useActiveRoute() {
  const { pathname } = useLocation();

  return (path) => {
    if (path === '/') {
      return pathname === '/';
    }

    return pathname === path || pathname.startsWith(`${path}/`);
  };
}
