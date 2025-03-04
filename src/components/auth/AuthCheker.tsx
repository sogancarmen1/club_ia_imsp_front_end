import axios from "axios";
import { useEffect } from "react";

function AuthChecker() {
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`, {
          withCredentials: true,
        });
        const data = res.data?.data.isTrue;
        if (!data) {
          localStorage.removeItem("isAuthenticated");
          window.location.href = "/auth/signin";
        }
      } catch (error) {
        localStorage.removeItem("isAuthenticated");
      }
    };

    checkAuth();
    const interval = setInterval(checkAuth, 300000);
    return () => clearInterval(interval);
  }, []);

  return null;
}

export default AuthChecker;
