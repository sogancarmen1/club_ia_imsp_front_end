// "use client";
import React, { useEffect } from "react";
import FormElements from "@/components/FormElements";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import FormLayout from "@/components/form-layout/page";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { useDashboard } from "@/app/context/dashboardContext";

interface CustomJwtPayload extends JwtPayload {
  _role: string;
}

// export const metadata: Metadata = {
//   title: "Next.js Form Elements | TailAdmin - Next.js Dashboard Template",
//   description:
//     "This is Next.js Form Elements page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
// };

const FormElementsPage = () => {
  //   const { setRole } = useDashboard();
  // const { setRole, token } = useDashboard();
  const token = cookies().get("Authorization")?.value;

  // useEffect(() => {
  // }, [token]);
  if (!token) {
    redirect("/auth/signin");
  }
  //   setRole(jwtDecoded._role);
  return (
    <DefaultLayout token={token}>
      <FormLayout />
    </DefaultLayout>
  );
};

export default FormElementsPage;
