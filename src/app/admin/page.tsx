import ECommerce from "@/components/Dashboard/E-commerce";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Metadata } from "next";
import { useDashboard } from "../context/dashboardContext";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { redirect } from "next/dist/server/api-utils";

interface CustomJwtPayload extends JwtPayload {
  _id: string;
  _role: string;
}

// export const metadata: Metadata = {
//   title: "Club IA-IMSP | Admin",
//   description: "Il s'agit de la page d'administration du site du club",
// };



export default function Admin() {
  const { setRole, token, setToken } = useDashboard();
    const [authToken, setAuthToken] = useState<string | null>(null);
    const router = useRouter();
    const storedToken = Cookies.get("Authorization");
    useEffect(() => {
      if (storedToken) {
        setAuthToken(storedToken);
        setToken(storedToken);
        const decoded = jwtDecode<CustomJwtPayload>(storedToken);
        setRole(decoded._role);
      }
      if (!storedToken) router.push("/auth/signin");
      // if (!token) redirect("/auth/signin");
    }, [token]);
  return (
    <>
      <DefaultLayout>
        <ECommerce />
      </DefaultLayout>
    </>
  );
}
