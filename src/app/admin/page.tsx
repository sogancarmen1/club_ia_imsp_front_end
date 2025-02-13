"use client";
import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import Cookies from "js-cookie";
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
  return (
    <>
      <DefaultLayout>
        <ECommerce />
      </DefaultLayout>
    </>
  );
}
