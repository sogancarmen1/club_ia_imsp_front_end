import React, { useState } from "react";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import FormEditor from "@/components/FormEditor";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { useDashboard } from "@/app/context/dashboardContext";
import { Loader } from "lucide-react";

export const metadata: Metadata = {
  title: "Next.js Form Elements | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Form Elements page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const FormElementsPage = () => {
  // const { setRole, token } = useDashboard();
  const token = cookies().get("Authorization")?.value;
  // const [loading, setLoading] = useState<boolean>(true);
  

  if (!token) {
    redirect("/auth/signin");
  }
  return (
    <DefaultLayout token={token}>
      <FormEditor />
    </DefaultLayout>
  );
};

export default FormElementsPage;
