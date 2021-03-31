import {
  EXPIRE_IN,
  COOKIE,
  ACCESS_TOKEN,
  REFRESH_TOKEN,
} from 'constants/common';

import localStorageService from 'utils/localStorage';
import cookies from 'utils/cookies';

// access token
export const setAccessToken = (accessToken, accessTokenExpiresIn) => {
  cookies.setItem(ACCESS_TOKEN, accessToken, accessTokenExpiresIn);
};

export const getAccessToken = () => cookies.getItem(ACCESS_TOKEN);

export const clearAccessToken = () => {
  cookies.removeItem(ACCESS_TOKEN);
};

// refresh token
export const setRefreshToken = (refreshToken) => {
  localStorage.setItem(REFRESH_TOKEN, refreshToken);
};

export const getRefreshToken = () => localStorage.getItem(REFRESH_TOKEN);

export const clearRefreshToken = () => {
  localStorage.removeItem(REFRESH_TOKEN);
};

// cookie
export const setCookie = (cookie) => {
  cookies.setItem(COOKIE, cookie);
};

export const getCookie = () => cookies.getItem(COOKIE);

export const clearCookie = () => {
  cookies.removeItem(COOKIE);
};

// expire
export const getExpireInByToken = (token) => {
  if (!token) {
    return null;
  }

  const jwt = JSON.parse(atob(token.split('.')[1]));

  // multiply by 1000 to convert seconds into milliseconds
  return (jwt && jwt.exp && jwt.exp * 1000) || null;
};

export const setExpireIn = (expireIn) => {
  localStorageService.setItem(EXPIRE_IN, JSON.stringify(expireIn));
};

export const getExpireIn = () => {
  const expireIn = localStorageService.getItem(EXPIRE_IN);
  if (expireIn) {
    return JSON.parse(expireIn);
  }
  return null;
};

export const clearExpireIn = () => {
  localStorageService.removeItem(EXPIRE_IN);
};

export const isTokenExpired = (exp) => {
  if (!exp) {
    return false;
  }

  return Date.now() > exp;
};

export const clearUserCredential = () => {
  clearCookie();
  clearExpireIn();
  clearAccessToken();
  clearRefreshToken();
};
