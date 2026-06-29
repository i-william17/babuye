import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { applySeo } from '../utils/seo';

export default function Seo({ title, description, robots }) {
  const { pathname } = useLocation();

  useEffect(() => {
    applySeo({ title, description, path: pathname, robots });
  }, [description, pathname, robots, title]);

  return null;
}
