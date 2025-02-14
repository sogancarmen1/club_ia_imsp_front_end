"use client";
import ECommerce from "@/components/Dashboard/E-commerce";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Metadata } from "next";
import { useDashboard } from "../context/dashboardContext";
import Cookies from "js-cookie";
import { cookies } from "next/headers";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { redirect } from "next/navigation";
import { useEffect } from "react";

interface CustomJwtPayload extends JwtPayload {
  _id: string;
  _role: string;
}

// export const metadata: Metadata = {
//   title: "Club IA-IMSP | Admin",
//   description: "Il s'agit de la page d'administration du site du club",
// };

export default function Admin() {
  const what = localStorage.getItem("isAuthenticated");
  if (!what) redirect("/auth/signin");
  return (
    <>
      <DefaultLayout>
        <ECommerce />
      </DefaultLayout>
    </>
  );
}
