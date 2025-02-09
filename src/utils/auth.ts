import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

interface DecodedToken {
  _role: string;
  exp: number;
  _id: string;
  [key: string]: any;
}

/**
 * Récupère le token depuis les cookies, puis le décode.
 * @returns Le rôle et autres informations du token ou `null` si invalide ou absent.
 */
export const getDecodedToken = (): DecodedToken | null => {
  const token = Cookies.get("Authorization"); // Récupère le token depuis les cookies
  if (!token) return null; // Si le token est absent, renvoie null

  try {
    // Décode le token JWT
    return jwtDecode<DecodedToken>(token);
  } catch (error) {
    console.error("Erreur lors du décodage du token:", error);
    return null; // Si le décodage échoue, renvoie null
  }
};
