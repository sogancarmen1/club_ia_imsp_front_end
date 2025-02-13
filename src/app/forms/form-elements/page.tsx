"use client";
import React, { useEffect } from "react";
import FormElements from "@/components/FormElements";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { useDashboard } from "@/app/context/dashboardContext";

// export const metadata: Metadata = {
//   title: "Next.js Form Elements | TailAdmin - Next.js Dashboard Template",
//   description:
//     "This is Next.js Form Elements page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
// };

const FormElementsPage = () => {
  return (
    <DefaultLayout>
      <FormElements />
    </DefaultLayout>
  );
};

export default FormElementsPage;
