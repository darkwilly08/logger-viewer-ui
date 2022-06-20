import { useRouter } from 'next/router';

import { useAuth } from '@darkwilly08/login';

interface AuthCheckProps {
  children: JSX.Element;
}

export function AuthCheck({ children }: AuthCheckProps) {
  const { ready, authUser } = useAuth();

  const router = useRouter();

  const validateRoute = (url: string): boolean => {
    let isValid = true;
    const path = url.split('?')[0];
    if (!authUser.loggedIn && !['/login', '/dashboard', '/settings'].includes(path)) {
      window.location.assign('/login');
      isValid = false;
    } else if (authUser.loggedIn && ['/login'].includes(path)) {
      window.location.assign('/settings');
      isValid = false;
    }

    return isValid;
  };

  const isValid = validateRoute(router.asPath);

  if (!ready || !isValid) {
    return null;
  }

  return children;
}
