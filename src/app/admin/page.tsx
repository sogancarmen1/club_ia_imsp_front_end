"use client";
import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import Cookies from "js-cookie";
import { cookies } from "next/headers";
import { useDashboard } from "@/app/context/dashboardContext";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { useRouter } from "next/navigation";

interface CustomJwtPayload extends JwtPayload {
  _id: string;
  _role: string;
}

// export const metadata: Metadata = {
//   title: "Club IA-IMSP | Admin",
//   description: "Il s'agit de la page d'administration du site du club",
// };

export default function Admin() {
  // const { setRole, token, setToken } = useDashboard();

  // const tokens = cookies().get("Authorization")?.value;
  // const tokenDecoded = token?.split("=")[1].split(";")[0];
  // if (tokenDecoded) {
  //   const jwtDecoded = jwtDecode<CustomJwtPayload>(tokenDecoded);
  // }
  // useEffect(() => {
  //   const storedToken = Cookies.get("Authorization");
  //   if (storedToken) {
  //     setToken(storedToken);
  //   }
  // }, []);
  const { setRole, token, setToken } = useDashboard();
  const [authToken, setAuthToken] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedToken = Cookies.get("Authorization");
    if (storedToken === undefined) {
      // Le cookie est en cours de chargement, ne rien faire
      return;
    }
    if (!storedToken) {
      router.push("/auth/signin");
    }
    if (storedToken) {
      setAuthToken(storedToken);
      setToken(storedToken);
      const decoded = jwtDecode<CustomJwtPayload>(storedToken);
      setRole(decoded._role);
      console.log(storedToken);
    }
  }, [router]);

  return (
    <>
      <DefaultLayout token={authToken}>
        <ECommerce />
      </DefaultLayout>
    </>
  );
}
