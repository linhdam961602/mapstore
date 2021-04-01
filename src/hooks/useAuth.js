import { getAccessToken } from 'utils/authHelper';

export function useAuth() {
  const token = getAccessToken();
  return {
    isAuthenticated: !!token,
  };
}
