// "use client";
import ECommerce from "@/components/Dashboard/E-commerce";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

// interface CustomJwtPayload extends JwtPayload {
//   _id: string;
//   _role: string;
// }

// export const metadata: Metadata = {
//   title: "Club IA-IMSP | Admin",
//   description: "Il s'agit de la page d'administration du site du club",
// };

export default function Admin() {
  const storedToken = cookies().get("Authorization")?.value;
    console.log("myv", storedToken);
    if(!storedToken) redirect("/auth/signin")
  return (
    <>
      <DefaultLayout>
        <ECommerce />
      </DefaultLayout>
    </>
  );
}
