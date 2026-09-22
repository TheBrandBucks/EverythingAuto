// utils/decodeToken.ts
import {jwtDecode} from 'jwt-decode'; //default import

export const decodeToken = (token: string) => {
  try {
    return jwtDecode<{ role: string }>(token); // only extracting `role`
  } catch (error) {
    return null;
  }
};
