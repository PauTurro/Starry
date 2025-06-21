import { Navigate } from 'react-router-dom';
import { useFirebase } from '../hooks/useFirebase';
import { ROUTES } from '../constants';

export default function ProtectedRoute({ children }) {
  const { user } = useFirebase();

  if (!user) {
    return <Navigate to={ROUTES.AUTH} replace />;
  }

  return children;
} 