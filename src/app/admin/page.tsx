import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import Cookies from "js-cookie";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Club IA-IMSP | Admin",
  description: "Il s'agit de la page d'administration du site du club",
};

export default function Admin() {
  const token = cookies().get("Authorization")?.value;

  if (!token) {
    redirect("/auth/signin");
  }

  return (
    <>
      <DefaultLayout token={token}>
        <ECommerce />
      </DefaultLayout>
    </>
  );
}
