import { stringify as queryStringify } from 'querystring';

import history from './history';

import {
  EXPIRE_IN,
  COOKIE,
  ACCESS_TOKEN,
  REFRESH_TOKEN,
} from 'constants/common';
import { LOGIN_URL } from 'constants/routes';
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
  localStorageService.setItem(REFRESH_TOKEN, refreshToken);
};

export const getRefreshToken = () => localStorageService.getItem(REFRESH_TOKEN);

export const clearRefreshToken = () => {
  localStorageService.removeItem(REFRESH_TOKEN);
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

export const redirectFromLogin = () =>
  history.replace({
    // push to login
    pathname: LOGIN_URL,
    // save the place to redirect after logging in successfully
    search: queryStringify({
      redirect: window.location.href,
    }),
  });
